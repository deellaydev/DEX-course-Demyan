import React from 'react';
import {Card} from "./Card";
import Carousel from 'react-elastic-carousel'

export const MainScreen = () => {
    return (
        <div className="mainscreen">
            <div className="container">
                <div className="mainscreen__inner">
                    <Card
                        state={'ended'}
                    />
                    <Card
                        state={'active'}
                    />
                    <Card
                        state={'waiting'}
                    />
                </div>
                <div className="mainscreen__slider">
                    <Carousel>
                        <Card
                            state={'active'}
                        />
                        <Card
                            state={'ended'}
                        />
                        <Card
                            state={'waiting'}
                        />
                    </Carousel>
                </div>
            </div>
        </div>
    );
};
