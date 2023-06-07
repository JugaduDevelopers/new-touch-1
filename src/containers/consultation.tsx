import React from "react";

type Props = {};

const consultant = (props: Props) => {
  return (
    <section className="bg-greyX">
      <div className="container mx-auto p-5">
        <div className="sm:flex">
          <div>
            <p className="text-redX">Request for your</p>
            <h1>Consultation</h1>
          </div>
          <div>
            <p>
              Pimples can be a frustrating and embarrassing skin problem that
              affects people of all ages. Although pimples are typically not
              harmful, they can be visually unappealing and cause physical
              discomfort.{" "}
            </p>
          </div>
        </div>
        <div className="">
          <button className="text-xs md:text-base md:px-4 bg-redX px-2 py-2 rounded-sm text-whiteX md:min-w-[130px]">
            Book Appointment{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export default consultant;
