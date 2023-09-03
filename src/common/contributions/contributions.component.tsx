import { useEffect, useMemo, useState } from "react";
import cn from "classnames";
import ActivityCalendar, { Activity } from "react-activity-calendar";

import { useAppSelector } from "src/app/store";
import { Theme } from "src/features/theme/theme.slice";
import { GITHUB_URL } from "src/utilities/constants";

import styles from "./contributions.module.scss";

const ACTIVITY_URL =
  "https://github-contributions-api.jogruber.de/v4/cxreiff?y=last";

type ApiResponse = {
  total: {
    [year: number]: number;
    [year: string]: number;
  };
  contributions: Activity[];
};

const fetchActivity = async () => {
  const activity = (await (await fetch(ACTIVITY_URL)).json()) as ApiResponse;
  return activity?.contributions || [];
};

type ContributionsProps = {
  numberOfDays?: number;
  className?: string;
};

export const Contributions = ({
  className,
  numberOfDays = 365,
}: ContributionsProps) => {
  const theme = useAppSelector((state) => state.theme.theme);
  const [activity, setActivity] = useState<Activity[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetchActivity().then(setActivity);
  }, []);

  const filteredActivity = useMemo(
    () =>
      activity.filter(
        (activity) =>
          new Date().getTime() - new Date(activity.date).getTime() <
          1000 * 60 * 60 * 24 * numberOfDays
      ),
    [activity]
  );

  useEffect(() => {
    if (filteredActivity.length > 0) {
      setTimeout(() => setLoaded(true), 10);
    }
  }, [filteredActivity]);

  return (
    <div
      className={cn(styles.contributions, className, {
        [styles.loaded]: loaded,
      })}
      onClick={() => {
        window.location.href = GITHUB_URL;
      }}
    >
      <ActivityCalendar
        data={filteredActivity}
        colorScheme={theme === Theme.LIGHTMODE ? "light" : "dark"}
        theme={{ light: ["#eee", "#aa7777"], dark: ["#111", "#aa77aa"] }}
        labels={{
          months: [
            "jan",
            "feb",
            "mar",
            "apr",
            "may",
            "jun",
            "jul",
            "aug",
            "sep",
            "oct",
            "nov",
            "dec",
          ],
        }}
        blockSize={14}
        hideColorLegend
        hideTotalCount
      />
      <span>github activity</span>
    </div>
  );
};
