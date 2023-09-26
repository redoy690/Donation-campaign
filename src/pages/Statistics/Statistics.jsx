import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Chart } from "react-google-charts";

const Statistics = () => {
  const [newDonation, setNewDonation] = useState()
  useEffect(() => {
    const myTotalDonation = JSON.parse(localStorage.getItem('favorites'))
    const myTotalDonationLength = myTotalDonation.length
    setNewDonation(myTotalDonationLength)
  }, [])
  const myDonation = newDonation
  const totalDonation = 12 - myDonation
  const data = [
    ["Task", "Hours per Day"],
    ["Total Donation", totalDonation],
    ["My Donation", myDonation],
  ];
  const options = {
    title: "",
  };


  return (
    <div className=" mx-80 mt-10">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
};

export default Statistics;