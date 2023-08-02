---
key: advent-of-code-2022-solutions
title: Advent of Code 2022 - Rust solutions
description: My solutions for Advent of Code 2022, implemented in Rust as a language-learning exercise.
date: 2022-06-15
---

Here are my solutions for Advent of Code 2022, implemented in Rust as a language-learning exercise.

Advent of Code is a programming challenge that takes place during December each year, where a new problem is revealed each day.

- <https://adventofcode.com/2022/>

---

## day_01

```rust
fn parse_input<'a>(input: &'a str) -> impl Iterator<Item = u32> + 'a {
    input.split("\n\n").map(|calorie_counts| {
        calorie_counts
            .lines()
            .map(|calories| calories.parse::<u32>().unwrap())
            .sum::<u32>()
    })
}

pub fn part_1(input: &str) -> String {
    parse_input(input).max().unwrap().to_string()
}

pub fn part_2(input: &str) -> String {
    let mut calorie_sums = parse_input(input).collect::<Vec<_>>();

    calorie_sums.sort_by(|a, b| b.cmp(a));

    calorie_sums.iter().take(3).sum::<u32>().to_string()
}
```

## day_02

```rust
pub fn part_1(input: &str) -> String {
    input
        .lines()
        .map(|round| (round.chars().next().unwrap(), round.chars().nth(2).unwrap()))
        .map(|(theirs, mine)| match theirs {
            'A' => match mine {
                'X' => 4,
                'Y' => 8,
                'Z' => 3,
                _ => 0,
            },
            'B' => match mine {
                'X' => 1,
                'Y' => 5,
                'Z' => 9,
                _ => 0,
            },
            'C' => match mine {
                'X' => 7,
                'Y' => 2,
                'Z' => 6,
                _ => 0,
            },
            _ => 0,
        })
        .sum::<u32>()
        .to_string()
}

pub fn part_2(input: &str) -> String {
    input
        .lines()
        .map(|round| (round.chars().next().unwrap(), round.chars().nth(2).unwrap()))
        .map(|(theirs, mine)| match theirs {
            'A' => match mine {
                'X' => 3,
                'Y' => 4,
                'Z' => 8,
                _ => 0,
            },
            'B' => match mine {
                'X' => 1,
                'Y' => 5,
                'Z' => 9,
                _ => 0,
            },
            'C' => match mine {
                'X' => 2,
                'Y' => 6,
                'Z' => 7,
                _ => 0,
            },
            _ => 0,
        })
        .sum::<u32>()
        .to_string()
}
```

## day_03

```rust
#![feature(iter_array_chunks)]

use std::collections::HashMap;

fn generate_char_priorities() -> HashMap<char, usize> {
    ('a'..='z')
        .chain('A'..='Z')
        .enumerate()
        .map(|(index, letter)| (letter, index + 1))
        .collect::<HashMap<char, usize>>()
}

pub fn part_1(input: &str) -> String {
    let char_priorities = generate_char_priorities();

    input
        .lines()
        .map(|rucksack| {
            let compartment_size = rucksack.len() / 2;
            let first_compartment = &rucksack[0..compartment_size];
            let second_compartment = &rucksack[compartment_size..rucksack.len()];
            char_priorities
                .get(
                    &(first_compartment
                        .chars()
                        .find(|letter| second_compartment.contains(*letter))
                        .unwrap()),
                )
                .unwrap()
        })
        .sum::<usize>()
        .to_string()
}

pub fn part_2(input: &str) -> String {
    let char_priorities = generate_char_priorities();
    input
        .lines()
        .array_chunks::<3>()
        .map(|[first, second, third]| {
            char_priorities
                .get(
                    &(first
                        .chars()
                        .find(|letter| second.contains(*letter) & third.contains(*letter))
                        .unwrap()),
                )
                .unwrap()
        })
        .sum::<usize>()
        .to_string()
}
```

## day_04

```rust
fn parse_starts_and_ends(input: &str) -> impl Iterator<Item = Vec<Vec<u32>>> + '_ {
    input.lines().map(|line| {
        line.split(',')
            .map(|elf| {
                elf.split('-')
                    .map(|id| id.parse::<u32>().unwrap())
                    .collect::<Vec<_>>()
            })
            .collect::<Vec<Vec<_>>>()
    })
}

pub fn part_1(input: &str) -> String {
    parse_starts_and_ends(input)
        .filter(|line| {
            (line[0][0] <= line[1][0] && line[0][1] >= line[1][1])
                || (line[0][0] >= line[1][0] && line[0][1] <= line[1][1])
        })
        .count()
        .to_string()
}

pub fn part_2(input: &str) -> String {
    parse_starts_and_ends(input)
        .filter(|line| !(line[0][1] < line[1][0] || line[0][0] > line[1][1]))
        .count()
        .to_string()
}

```

## day_05

```rust
use nom::{
    branch::alt,
    bytes::complete::tag,
    character::complete::{self, alpha1, digit1, multispace1, newline},
    multi::{many1, separated_list1},
    sequence::{delimited, preceded},
    IResult,
};

struct Move {
    amount: usize,
    origin: usize,
    destination: usize,
}

fn parse_crate(input: &str) -> IResult<&str, Option<&str>> {
    let (input, crated) = alt((
        tag("   "),
        delimited(complete::char('['), alpha1, complete::char(']')),
    ))(input)?;

    let result = match crated {
        "   " => None,
        value => Some(value),
    };

    Ok((input, result))
}

fn parse_row(input: &str) -> IResult<&str, Vec<Option<&str>>> {
    let (input, result) = separated_list1(tag(" "), parse_crate)(input)?;
    Ok((input, result))
}

fn parse_stacks(input: &str) -> IResult<&str, Vec<Vec<&str>>> {
    let (input, stacks_horizontal) = separated_list1(newline, parse_row)(input)?;
    let (input, _) = newline(input)?;
    let (input, _) = many1(preceded(multispace1, digit1))(input)?;
    let (input, _) = multispace1(input)?;

    let mut stacks_vertical = vec![];
    for _ in 0..=stacks_horizontal.len() {
        stacks_vertical.push(vec![]);
    }
    for vec in stacks_horizontal.iter().rev() {
        for (i, crated) in vec.iter().enumerate() {
            if crated.is_some() {
                stacks_vertical[i].push(crated.unwrap().clone());
            }
        }
    }

    Ok((input, stacks_vertical))
}

fn parse_move(input: &str) -> IResult<&str, Move> {
    let (input, _) = tag("move ")(input)?;
    let (input, amount) = complete::u32(input)?;
    let (input, _) = tag(" from ")(input)?;
    let (input, origin) = complete::u32(input)?;
    let (input, _) = tag(" to ")(input)?;
    let (input, destination) = complete::u32(input)?;

    Ok((
        input,
        Move {
            amount: amount as usize,
            origin: (origin - 1) as usize,
            destination: (destination - 1) as usize,
        },
    ))
}

fn parse_moves(input: &str) -> IResult<&str, Vec<Move>> {
    let (input, result) = separated_list1(newline, parse_move)(input)?;

    Ok((input, result))
}

fn parse_input(input: &str) -> IResult<&str, (Vec<Vec<&str>>, Vec<Move>)> {
    let (input, stacks) = parse_stacks(input)?;
    let (input, moves) = parse_moves(input)?;

    Ok((input, (stacks, moves)))
}

pub fn part_1(input: &str) -> String {
    let (_, (mut stacks, moves)) = parse_input(input).unwrap();
    for Move {
        amount,
        origin,
        destination,
    } in moves.iter()
    {
        let origin_len = stacks[*origin].len();
        let to_move = stacks[*origin]
            .drain((origin_len - *amount)..)
            .rev()
            .collect::<Vec<_>>();
        stacks[*destination].extend(to_move);
    }

    stacks
        .iter()
        .map(|stack| match stack.iter().last() {
            Some(crated) => crated,
            None => "",
        })
        .collect::<String>()
}

pub fn part_2(input: &str) -> String {
    let (_, (mut stacks, moves)) = parse_input(input).unwrap();
    for Move {
        amount,
        origin,
        destination,
    } in moves.iter()
    {
        let origin_len = stacks[*origin].len();
        let to_move = stacks[*origin]
            .drain((origin_len - *amount)..)
            .collect::<Vec<_>>();
        stacks[*destination].extend(to_move);
    }

    stacks
        .iter()
        .map(|stack| match stack.iter().last() {
            Some(crated) => crated,
            None => "",
        })
        .collect::<String>()
}

```

## day_06

```rust
use std::collections::HashSet;

fn find_marker(input: &str, window_size: usize) -> String {
    let chars = input.chars().collect::<Vec<char>>();

    let (index, _) = chars
        .windows(window_size)
        .enumerate()
        .find(|(_, letter)| letter.len() == letter.iter().collect::<HashSet<&char>>().len())
        .unwrap();

    (index + window_size).to_string()
}

pub fn part_1(input: &str) -> String {
    find_marker(input, 4)
}

pub fn part_2(input: &str) -> String {
    find_marker(input, 14)
}

```

## day_07

```rust
#![feature(iter_intersperse)]
use std::collections::BTreeMap;

use nom::{
    branch::alt,
    bytes::complete::{is_a, tag},
    character::complete::{self, alpha1, newline},
    multi::separated_list1,
    sequence::separated_pair,
    IResult,
};

#[derive(Debug)]
enum Operation<'a> {
    Cd(Cd<'a>),
    Ls(Vec<Files<'a>>),
}

#[derive(Debug)]
enum Cd<'a> {
    Root,
    Up,
    Down(&'a str),
}

#[derive(Debug)]
enum Files<'a> {
    File { size: u32 },
    Dir(&'a str),
}

fn nom_file(input: &str) -> IResult<&str, Files> {
    let (input, (size, _)) =
        separated_pair(complete::u32, tag(" "), is_a("qwertyuiopasdfghjklzxcvbnm."))(input)?;
    Ok((input, Files::File { size }))
}

fn nom_directory(input: &str) -> IResult<&str, Files> {
    let (input, _) = tag("dir ")(input)?;
    let (input, name) = alpha1(input)?;
    Ok((input, Files::Dir(name)))
}

fn nom_ls(input: &str) -> IResult<&str, Operation> {
    let (input, _) = tag("$ ls")(input)?;
    let (input, _) = newline(input)?;
    let (input, files) = separated_list1(newline, alt((nom_file, nom_directory)))(input)?;
    Ok((input, Operation::Ls(files)))
}

fn nom_cd(input: &str) -> IResult<&str, Operation> {
    let (input, _) = tag("$ cd ")(input)?;
    let (input, dir) = alt((tag(".."), alpha1, tag("/")))(input)?;
    let operation = match dir {
        "/" => Operation::Cd(Cd::Root),
        ".." => Operation::Cd(Cd::Up),
        name => Operation::Cd(Cd::Down(name)),
    };
    Ok((input, operation))
}

fn nom_commands(input: &str) -> IResult<&str, Vec<Operation>> {
    let (input, commands) = separated_list1(newline, alt((nom_ls, nom_cd)))(input)?;
    Ok((input, commands))
}

fn get_directory_sizes(commands: Vec<Operation>) -> BTreeMap<Vec<&str>, u32> {
    let (_, sizes) = commands.iter().fold(
        (vec![], BTreeMap::new()),
        |(mut context, mut sizes), command| {
            match command {
                Operation::Cd(Cd::Root) => {
                    context.push("");
                }
                Operation::Cd(Cd::Up) => {
                    context.pop();
                }
                Operation::Cd(Cd::Down(name)) => {
                    context.push(name);
                }
                Operation::Ls(files) => {
                    let sum = files
                        .iter()
                        .filter_map(|file| {
                            if let Files::File { size } = file {
                                Some(size)
                            } else {
                                None
                            }
                        })
                        .sum::<u32>();

                    for i in 0..context.len() {
                        sizes.entry(context[0..=i].to_vec())
                            .and_modify(|v| *v += sum)
                            .or_insert(sum);
                    }
                }
            };
            (context, sizes)
        },
    );
    sizes
}

pub fn part_1(input: &str) -> String {
    let (_, commands) = nom_commands(input).unwrap();
    let sizes = get_directory_sizes(commands);
    let summed_sizes = sizes
        .iter()
        .filter(|(_, &size)| size < 100000)
        .map(|(_, size)| size)
        .sum::<u32>();
    summed_sizes.to_string()
}

pub fn part_2(input: &str) -> String {
    let (_, commands) = nom_commands(input).unwrap();
    let sizes = get_directory_sizes(commands);
    let total = sizes.get(&vec![""]).unwrap();
    let target_size = total - 40000000;
    let mut sizes = sizes
        .iter()
        .map(|(_, &size)| size)
        .filter(|&size| size > target_size)
        .collect::<Vec<u32>>();
    sizes.sort();
    let deletion_size = sizes.iter().next().unwrap();
    deletion_size.to_string()
}

```

## day_08

```rust

```

## day_09

```rust

```

## day_10

```rust

```

## day_11

```rust

```

## day_12

```rust

```

## day_13

```rust

```

## day_14

```rust

```

## day_15

```rust

```

## day_16

```rust

```

## day_17

```rust

```

## day_13

```rust

```
