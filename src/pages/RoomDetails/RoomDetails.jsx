import React from "react";
import Container from "../../components/shared/Container";

const RoomDetails = () => {
  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <div>header</div>
          <div>Room info</div>
          <div>reservation</div>
        </div>
      </div>
    </Container>
  );
};

export default RoomDetails;
