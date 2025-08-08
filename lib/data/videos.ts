import type { Video } from "../types";
// import coaching from "../assets/coaching.mp4"
//video imports
import coaching from "../../assets/meetwithstudents.mp4";
import mycar from "../../assets/mycar.mp4";
import coaching2 from "../../assets/coaching2.mp4";
import hard_at_work from "../../assets/hard_at_work.mp4";
import shashkey from "../../assets/shashkey.mp4";
import myoffice from "../../assets/myoffice.mp4";

import coaching_t from "../../assets/thumbnails/coaching_t.jpg";
import bmw_t from "../../assets/thumbnails/bmw_t.jpg";
import coaching2_t from "../../assets/thumbnails/coaching2_t.jpg";
import work_t from "../../assets/thumbnails/work_t.jpg";
import success_t from "../../assets/thumbnails/success_t.jpg";
import office_t from "../../assets/thumbnails/office_t.jpg";
import { off } from "process";

export const videos: Video[] = [
  {
    title: "Meeting with students",
    platform: "TikTok",
    views: "4.2M",
    likes: "847K",
    thumbnail: coaching_t.src,
    duration: "0:59",
    viral: true,
    src: coaching,
  },
  {
    title: "My office Tour",
    platform: "YouTube",
    views: "1.8M",
    likes: "156K",
    thumbnail: office_t.src,
    duration: "12:34",
    viral: false,
    src: myoffice,
  },
  {
    title: "BMW vs Trading Profits",
    platform: "Instagram",
    views: "2.1M",
    likes: "234K",
    thumbnail: bmw_t.src,
    duration: "1:23",
    viral: true,
    src: mycar,
  },
  {
    title: "Golden Cross Strategy Explained",
    platform: "YouTube",
    views: "956K",
    likes: "89K",
    thumbnail: coaching2_t.src,
    duration: "8:45",
    viral: false,
    src: coaching2,
  },
  {
    title: "Day in My Trading Life",
    platform: "TikTok",
    views: "3.7M",
    likes: "623K",
    thumbnail: work_t.src,
    duration: "0:45",
    viral: true,
    src: hard_at_work,
  },
  {
    title: "Student Success Transformation",
    platform: "Instagram",
    views: "1.3M",
    likes: "178K",
    thumbnail: success_t.src,
    duration: "2:15",
    viral: false,
    src: shashkey,
  },
];
