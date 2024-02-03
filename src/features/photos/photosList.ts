import { OBJECT_STORE_ASSETS_URL } from "src/utilities/constants";

const NUM_PHOTOS = 24;

export const PHOTO_SETS = Array(NUM_PHOTOS)
  .fill(0)
  .map((_, index) => ({
    small: `${OBJECT_STORE_ASSETS_URL}photos/sm_photo_${index}.png`,
    medium: `${OBJECT_STORE_ASSETS_URL}photos/md_photo_${index}.png`,
    large: `${OBJECT_STORE_ASSETS_URL}photos/lg_photo_${index}.png`,
  }));
