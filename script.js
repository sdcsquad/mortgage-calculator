/* eslint-disable */
import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  stages: [
    { duration: "30s", target: 20 },
    { duration: "1m30s", target: 10  },
    { duration: "20s", target: 17 },
    { duration: "30s", target: 20 },
    { duration: "1m30s", target: 20  },
    { duration: "20s", target: 17 },
    { duration: "30s", target: 60 },
    { duration: "1m30s", target: 35  },
    { duration: "20s", target: 15 },
  ]
};

export default function () {
  const random = Math.floor(Math.random() * (10000000 - 9000000) + 9000000);
  let res = http.get(`http://localhost:3000/api/mortgageCalculator/${random}`);
  check(res, {
    "success": (r) => r.status ==200
  })
};
