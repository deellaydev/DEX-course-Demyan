import React, {useEffect, useState} from 'react';
import {Search} from "../../../common/components/Input/Search";
import styled from "styled-components";
import {Button} from "../../../common/components/Button/Button";
import { useNavigate } from "react-router-dom";
import {Pagination} from "../../../common/components/Pagination/Pagination";
import {TeamCardSmall} from "../../../common/components/Card/TeamCardSmall";
import {TeamsService} from "../../../api/teams/TeamsService";
import {SelectComponent} from "../../../common/components/Select/SelectComponent";

export const Teams = () => {

    const navigate = useNavigate()

    return (
        <TeamsContainer>
            <TeamsHeader>
                <Search/>
                <Button width={'100px'} onClick={() => navigate('/teams/addTeam')}>Add +</Button>
            </TeamsHeader>
            <TeamsCardContainer>
            </TeamsCardContainer>
            <TeamsFooter>
                <Pagination countPages={10}/>
                <SelectComponent/>
            </TeamsFooter>
        </TeamsContainer>
    );
};
const TeamsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 80px;
  justify-content: space-between;
`
const TeamsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`
const TeamsCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const TeamsFooter = styled.div`
  display: flex;
  justify-content: space-between;
`