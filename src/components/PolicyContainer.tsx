import React, {useState} from 'react';
import {executeGet} from "../api/apiRequest";
import {AxiosResponse} from "axios";


export interface PolicyContainerProps {
    changeContainerType: (type: 'policy' | 'rule' | 'other') => void;
}
const PolicyContainer: React.FC<PolicyContainerProps> = ({ changeContainerType }) => {
    const [title, setTitle] = useState<String>('new policy');
    const handleClick = () => {
        changeContainerType('rule');
    };

    const changeTitle = (res: AxiosResponse) => {
        setTitle(res.data);
    }

    const testGet = () => {
        executeGet("/health", changeTitle);
    }

    return (
        <div>
            <h2>새로운 정책을 정의하는 container</h2>
            <div>
                <p>title: {title}</p>
                <input/>
                <h3>결정사항 추가</h3>
                <button name={"ADD"}>ADD</button>
                <li>냉장 멀티 waiting line</li>
                <li>상온 멀티 waiting line</li>
            </div>
            <div>
                <button onClick={handleClick}>NEXT!</button>
                <button onClick={testGet}>GET</button>
            </div>
        </div>
    );
}

export default PolicyContainer;
