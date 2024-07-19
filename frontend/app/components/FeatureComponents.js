"use client";

import React from 'react';
import './FeatureComponent.css'; // Ensure this path is correct

const FeaturedComponent = ({ data }) => {
  if (!data || data.length === 0) {
    return <p className="text-center">No data available</p>;
  }

  const item = data[0]; // Get the first item from the array

  const centerText = item[ "Income Proof"] ;
  const middleTexts = [
    { key: "Academic Records", value: item["Academic Records"] },
    { key: "Property Documents", value: item["Property Documents"] },
    { key: "Residence Proof", value: item["Residence Proof"] },
    { key: "Bank Statements", value: item["Bank Statements"] },
  ];
  const innerTexts = [
    { key: "Application Form", value: item["Application Form"] },
    { key: "Photographs", value: item["Photographs"] },
    { key: "Identity Proof", value: item["Identity Proof"] },
    { key: "Guarantor Form", value: item["Guarantor Form"] },
  ];
  const outerText = { key:"Additional Documents" ,value:item["Additional Documents"]};

  return (
    <div className="relative flex justify-center items-center h-screen">
      {/* Outer Circle */}
      <div className="circle-outer rotate-container">
        <div className="sub-circle sub-circle-outer">
          <div className="sub-circle-wrapper">
            <span className="circle-text">{outerText.key}: {outerText.value}</span>
          </div>
        </div>

        {/* Middle Circle */}
        <div className="circle-middle rotate-container">
          {innerTexts.map((text, index) => (
            <div
              key={index}
              className="sub-circle sub-circle-middle"
              style={{
                transform: `rotate(${index * 90}deg) translateX(300px) rotate(-${index * 90}deg)`,
              }}
            >
              <div className="sub-circle-wrapper">
                <span className="circle-text">{text.key}: {text.value}</span>
              </div>
            </div>
          ))}

          {/* Inner Circle */}
          <div className="circle-inner rotate-container">
            {middleTexts.map((text, index) => (
              <div
                key={index}
                className="sub-circle sub-circle-inner"
                style={{
                  transform: `rotate(${index * 90}deg) translateX(200px) rotate(-${index * 90}deg)`,
                }}
              >
                <div className="sub-circle-wrapper">
                  <span className="circle-text">{text.key}: {text.value}</span>
                </div>
              </div>
            ))}

            {/* Center Circle */}
            <div className="circle-center">
              <div className="sub-circle sub-circle-center">
                <div className="sub-circle-wrapper">
                  <span className="circle-text">{centerText}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedComponent;
