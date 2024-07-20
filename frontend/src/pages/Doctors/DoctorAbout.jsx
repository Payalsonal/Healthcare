import React from 'react';
import { formatDate } from '../../utils/formateDate';

const DoctorAbout = ({ name, about, qualification, experiences }) => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            {name}
          </span>
        </h3>
        <p className="text__para">{about}</p>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[50px] text-headingColor font-semibold">
          Educational qualification
        </h3>
        <ul className="pt-4 md:p-5 ">
          {qualification?.map((item, index) => (
            <li
              className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]"
              key={index}
            >
              <div>
                <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                  {formatDate(item.startingDate)} -{' '}
                  {formatDate(item.endingDate)}
                </span>
                <p className="text-[16px] leading-6 font-medium text-textColor">
                  {item.degree}
                </p>
                <p className="text-[14px] leading-5 font-medium text-textColor">
                  {item.University}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[50px] text-headingColor font-semibold">
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          {experiences?.map((item, index) => 
            <li key={index} className="[p-4 rounded bg-[#fff9ea]" >
              <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                {formatDate(item.startDate)} -{formatDate(item.endingDate)}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                {item.position}
              </p>
              <p className="text-[14px] leading-5 font-medium text-textColor">
                {item.hospital}
              </p>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
