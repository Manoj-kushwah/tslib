import {MessageType} from './enum/MessageType';

export namespace JTEP{
    export const Config = (value:string)=>{
        console.log('value:',value);
        console.log('MessageType:',MessageType);
    };
}