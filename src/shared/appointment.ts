type props = {
  id: number;
  day: string;
  time: { t: string; active: boolean }[];
};

export const AppointmentDay: props[] = [
  {
    id: 0,
    day: "sunday",
    time: [
      { t: "10 am", active: false },
      { t: "11 am", active: false },
      { t: "12 am", active: false },
      { t: "01 pm", active: false },
      { t: "02 pm", active: false },
      { t: "03 pm", active: false },
      { t: "04 pm", active: false },
      { t: "05 pm", active: false },
    ],
  },
  {
    id: 1,
    day: "monday",
    time: [
      { t: "10 am", active: false },
      { t: "11 am", active: false },
      { t: "12 am", active: false },
      { t: "01 pm", active: false },
      { t: "02 pm", active: false },
      { t: "03 pm", active: false },
      { t: "04 pm", active: false },
      { t: "05 pm", active: false },
    ],
  },
  {
    id: 2,
    day: "tuesday",
    time: [
      { t: "10 am", active: false },
      { t: "11 am", active: false },
      { t: "12 am", active: false },
      { t: "01 pm", active: false },
      { t: "02 pm", active: false },
      { t: "03 pm", active: false },
      { t: "04 pm", active: false },
      { t: "05 pm", active: false },
    ],
  },
  {
    id: 3,
    day: "wednesday",
    time: [
      { t: "10 am", active: false },
      { t: "11 am", active: false },
      { t: "12 am", active: false },
      { t: "01 pm", active: false },
      { t: "02 pm", active: false },
      { t: "03 pm", active: false },
      { t: "04 pm", active: false },
      { t: "05 pm", active: false },
    ],
  },
  {
    id: 4,
    day: "thursday",
    time: [
      { t: "10 am", active: false },
      { t: "11 am", active: false },
      { t: "12 am", active: false },
      { t: "01 pm", active: false },
      { t: "02 pm", active: false },
      { t: "03 pm", active: false },
      { t: "04 pm", active: false },
      { t: "05 pm", active: false },
    ],
  },
  {
    id: 5,
    day: "friday",
    time: [
      { t: "10 am", active: false },
      { t: "11 am", active: false },
      { t: "12 am", active: false },
      { t: "01 pm", active: false },
      { t: "02 pm", active: false },
      { t: "03 pm", active: false },
      { t: "04 pm", active: false },
      { t: "05 pm", active: false },
    ],
  },
  {
    id: 6,
    day: "saturday",
    time: [
      { t: "10 am", active: false },
      { t: "11 am", active: false },
      { t: "12 am", active: false },
      { t: "01 pm", active: false },
      { t: "02 pm", active: false },
      { t: "03 pm", active: false },
      { t: "04 pm", active: false },
      { t: "05 pm", active: false },
    ],
  },
];
