import React from "react";
// BucketList 컴포넌트를 import 해옵니다. import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Detail = (props) => {
    const detail_name = useParams();
    console.log(props);
    const text= props.text;
    const addBucketList = props.addBucketList;


    return (
        <div className="App">
            <Container>
                <Title>내 버킷리스트</Title>
                <Line/>
                <p>상세페이지입니다.</p>
            </Container>
            <Input>
                <input type="text" ref={text}/>
                <button onClick={addBucketList}>추가하기</button>
            </Input>
        </div>
    );
}

const Input = styled.div `
max-width: 350px;
min-height: 10vh;
background-color: #fff;
padding: 16px;
margin: 20px auto;
border-radius: 5px;
border: 1px solid #ddd;
`;

const Container = styled.div `
max-width: 350px;
min-height: 60vh;
background-color: #fff;
padding: 16px;
margin: 20px auto;
border-radius: 5px;
border: 1px solid #ddd;
`;

const Title = styled.h1 `
color: slateblue;
text-align: center;
`;

const Line = styled.hr `
margin: 16px 0px;
border: 1px dotted #ddd;
`;

export default Detail;