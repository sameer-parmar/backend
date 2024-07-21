"use client";

import './FeatureComponent.css'; // Ensure this path is correct

const FeaturedComponent = ({ data }) => {
  const incomeProof = data[0]['Income Proof'];
  const photographs = data[0]['Photographs'];
  const propertyDocuments = data[0]['Property Documents'];
  const bankStatements = data[0]['Bank Statements'];
  const academicRecords = data[0]['Academic Records'];
  const identityProof = data[0]['Identity Proof'];
  const additionalDocuments = data[0]['Additional Documents'];
  const guarantorForm = data[0]['Guarantor Form'];
  const applicationForm = data[0]['Application Form'];
  const residenceProof = data[0]['Residence Proof'];

  return (
    <div className="circle-container">
     <div className="circle center-circle">
  <div className="circle-item center-item" style={{ transform: 'translate(-100px, -100px) rotate(0deg)' }}>
    <h3>Income Proof</h3>
    <p>{incomeProof}</p>
  </div>
</div>

      <div className="circle inner-circle">
        <div className="circle-item" style={{ transform: 'rotate(0deg) translate(150px,-50px) rotate(0deg)' }}>
          <h3>Photographs</h3>
          <p>{photographs}</p>
        </div>
        <div className="circle-item " style={{ transform: 'rotate(90deg) translate(150px,80px) rotate(-90deg)' }}>
          <h3>Property Documents</h3>
          <p>{propertyDocuments}</p>
        </div>
        <div className="circle-item" style={{ transform: 'rotate(180deg) translate(280px,40PX) rotate(-180deg)' }}>
          <h3>Bank Statements</h3>
          <p>{bankStatements}</p>
        </div>
        <div className="circle-item" style={{ transform: 'rotate(270deg) translate(250px,-70PX) rotate(-270deg)' }}>
          <h3>Academic Records</h3>
          <p>{academicRecords}</p>
        </div>
      </div>

      <div className="circle outer-circle">
        <div className="circle-item" style={{ transform: 'rotate(45deg) translate(340px,20px) rotate(-45deg)' }}>
          <h3>Identity Proof</h3>
          <p>{identityProof}</p>
        </div>
        <div className="circle-item" style={{ transform: 'rotate(135deg) translate(380px,20px) rotate(-135deg)' }}>
          <h3>Additional Documents</h3>
          <p>{additionalDocuments}</p>
        </div>
        <div className="circle-item" style={{ transform: 'rotate(225deg) translate(450px) rotate(-225deg)' }}>
          <h3>Guarantor Form</h3>
          <p>{guarantorForm}</p>
        </div>
        <div className="circle-item" style={{ transform: 'rotate(315deg) translate(390px,-30px) rotate(-315deg)' }}>
          <h3>Application Form</h3>
          <p>{applicationForm}</p>
        </div>
      </div>

      <div className="circle outermost-circle">
        <div className="circle-item" style={{ transform: 'rotate(30deg) translate(500px,-100px) rotate(-30deg)' }}>
          <h3>Residence Proof</h3>
          <p>{residenceProof}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedComponent;
