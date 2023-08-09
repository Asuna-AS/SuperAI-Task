import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import echarts from "echarts";
import MyChartComponent from "./echarts";
import MyChartComponent2 from "./echarts2";
import "react-widgets/styles.css";
import DatePicker from "react-widgets/DatePicker";
function App() {
  return (
    <div className="flex max-lg:flex-col">
      <div className="flex flex-col w-full">
        <h1 className="p-3 font-semibold text-left">
          Comparion of high performer resignation rates to the overall
          resignation rate
        </h1>
        <h1 className="pl-3 text-left">
          Do high performers resign more often than others?
        </h1>
        <div className="flex flex-row pt-3 pl-3 gap-8">
          <DatePicker
            defaultValue={new Date()}
            valueEditFormat={{ dateStyle: "short" }}
            valueDisplayFormat={{ dateStyle: "medium" }}
          />
          <button className="flex border-gray-200 border-[1px] rounded-md text-sm font-semibold p-1 items-center box-border">
            + Add a filter
          </button>
        </div>
        <div className="flex flex-row max-lg:flex-col">
          <MyChartComponent />
          <MyChartComponent2 />
        </div>
      </div>
      <div className="flex flex-row bg-gray-200 shadow-xl max-lg:flex-col">
        <div className="flex flex-col items-center justify-center gap-3 max-lg:flex-row">
          <button className="w-8 h-8 text-white bg-blue-500 rounded-full -ml-4 shadow-xl">
            i
          </button>
          <button className="w-8 h-8 text-white bg-gray-500 rounded-full -ml-4 shadow-xl pl-2">
            <svg
              width="12"
              height="12"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
                fill="currentColor"
              />
              <path
                d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z"
                fill="currentColor"
              />
              <path
                d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button className="w-8 h-8 text-white bg-gray-500 rounded-full -ml-4 shadow-xl p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
            </svg>
          </button>
          <button className="w-8 h-8 text-white bg-gray-500 rounded-full -ml-4 shadow-xl p-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button className="w-8 h-8 text-white bg-black rounded-full -ml-4 shadow-xl p-[6px]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 8C2 6.34315 3.34315 5 5 5H19C20.6569 5 22 6.34315 22 8V16C22 17.6569 20.6569 19 19 19H5C3.34315 19 2 17.6569 2 16V8ZM13 7H19C19.5523 7 20 7.44771 20 8V11H13V7ZM11 7H5C4.44772 7 4 7.44772 4 8V11H11V7ZM4 13V16C4 16.5523 4.44772 17 5 17H11V13H4ZM13 17H19C19.5523 17 20 16.5523 20 16V13H13V17Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
        <div className="">
          <h1 className="font-semibold text-left pl-3">Summary</h1>
          <br></br>
          <p className="text-sm font-semibold text-left pl-3 pb-2">
            April 2018 - March 2019
          </p>
          <div className="bg-white m-1 p-2">
            <p className="px-4 py-1 text-left flex justify-between">
              <span className="text-blue-500 font-semibold">Overall</span>
              <span className="text-blue-500 font-semibold">14 %</span>
            </p>
            <span className="w-full flex bg-gray-300 h-[1px]"></span>
            <p className="px-4 py-1 text-left flex justify-between">
              <span className="text-gray-400 font-semibold">
                Resignation Count
              </span>
              <span className="text-gray-400 font-semibold">639</span>
            </p>
            <span className="w-full flex bg-gray-300 h-[1px]"></span>
            <p className="px-4 py-1 text-left flex justify-between">
              <span className="text-gray-400 font-semibold">Avg Headcount</span>
              <span className="text-gray-400 font-semibold">4.58 K</span>
            </p>
            <span className="w-full flex bg-gray-300 h-[1px]"></span>
            <p className="px-4 py-1 text-left flex justify-between">
              <span className="text-red-400 font-semibold">High Performer</span>
              <span className="text-red-400 font-semibold">14.1 %</span>
            </p>
            <span className="w-full flex bg-gray-300 h-[1px]"></span>
            <p className="px-4 py-1 text-left flex justify-between">
              <span className="text-gray-400 font-semibold">
                Resignation Count
              </span>
              <span className="text-gray-400 font-semibold">152</span>
            </p>
            <span className="w-full flex bg-gray-300 h-[1px]"></span>
            <p className="px-4 py-1 text-left flex justify-between">
              <span className="text-gray-400 font-semibold">Avg Headcount</span>
              <span className="text-gray-400 font-semibold">108 K</span>
            </p>
            <span className="w-full flex bg-gray-300 h-[1px]"></span>
            <p className="px-4 py-1 text-left flex justify-between">
              <span className="text-green-400 font-semibold">Difference</span>
              <span className="text-green-400 font-semibold">-0.16 pp</span>
            </p>
          </div>
          <button className="border-gray-300 p-2 border-2 m-2">
            View details
          </button>
          <p className="text-sm font-semibold text-left pl-3 pb-2">Legend</p>
          <div className="bg-white m-1 p-2 gap-2">
            <p className="text-left text-sm ">
              Not all data items are shown in this chart. To show these values,
              go to
            </p>

            <p className="text-left text-blue-300 font-semibold text-sm">
              CHAT SETTINGS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
