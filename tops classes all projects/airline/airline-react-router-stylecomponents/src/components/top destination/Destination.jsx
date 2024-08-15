import React from 'react'
import './destination.css'
import styled from 'styled-components'

const Destination = () => {
    const ParentDivDestination = styled.div`
      width: 100%;
    `;
    const ChildDivDestination = styled.div`
    height: 200px;
    margin: 10px 30px;
    border-radius: 20px;
    border: 2px solid black;
    overflow: hidden;
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    `;
    return (
        <>
            <ParentDivDestination className="destinantion right-side ">
                <h2>Top Destinations</h2>
                <div className="destination-wrapper">
                    <ChildDivDestination className="box box1" />
                    <ChildDivDestination className="box box2" />
                    <ChildDivDestination className="box box3" />
                    <ChildDivDestination className="box box4" />
                </div>
            </ParentDivDestination>

        </>
    )
}

export default Destination
