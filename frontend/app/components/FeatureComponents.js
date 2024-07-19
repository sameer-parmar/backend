"use client";

import React from 'react';

const FeaturedComponent = ({ data }) => {
  if (!data || data.length === 0) {
    return <p className="text-center">No data available</p>;
  }

  const item = data[0]; // Get the first item from the array

  return (
    <div className="relative flex justify-center items-center h-screen">
      {/* Outer Circle */}
      <div className="circle-outer">
        <div className="sub-circle sub-circle-outer" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <span className="circle-text">{item["Income Proof"]}</span>
        </div>

        {/* Middle Circle */}
        <div className="circle-middle">
          {[item["Application Form"], item["Photographs"], item["Identity Proof"], item["Guarantor Form"]].map((text, index) => (
            <div
              key={index}
              className="sub-circle sub-circle-middle"
              style={{
                transform: `rotate(${index * 90}deg) translateX(50%)`,
                top: '50%',
                left: '50%',
                transformOrigin: 'center',
              }}
            >
              <span className="circle-text">{text}</span>
            </div>
          ))}

          {/* Inner Circle */}
          <div className="circle-inner">
            {[item["Academic Records"], item["Property Documents"], item["Residence Proof"], item["Bank Statements"]].map((text, index) => (
              <div
                key={index}
                className="sub-circle sub-circle-inner"
                style={{
                  transform: `rotate(${index * 90}deg) translateX(50%)`,
                  top: '50%',
                  left: '50%',
                  transformOrigin: 'center',
                }}
              >
                <span className="circle-text">{text}</span>
              </div>
            ))}

            {/* Center Circle */}
            <div className="circle-center">
              <div className="sub-circle sub-circle-center">
                <span className="circle-text">{item["Additional Documents"]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedComponent;
