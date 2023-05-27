import React from "react";
import Container from "../../components/shared/Container";
import Header from "../../components/rooms/Header";
import RoomInfo from "../../components/rooms/RoomInfo";
import RoomReservation from "../../components/rooms/RoomReservation";

const RoomDetails = () => {
  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <Header></Header>
          <div className="flex flex-col md:flex-row md:gap-10 mt-6">
            <div className="md:w-2/3">
              <RoomInfo></RoomInfo>
            </div>
            <div className="md:w-1/3 order-first md:order-last">
              <RoomReservation></RoomReservation>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RoomDetails;
