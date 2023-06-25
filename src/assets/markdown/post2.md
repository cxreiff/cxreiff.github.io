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
