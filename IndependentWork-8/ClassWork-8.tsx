import React, { Children, ComponentClass, FC, ReactNode, useLayoutEffect, VFC, ComponentType} from "react";
import { GoogleLogoComponent } from "./components";

//TODO: Создайте классовый компонент ClassComponent
// который отрисует div с текстом ClassComponent

export class ClassComponent extends React.Component<{text: string}>{

  render() {
    return (
      <div>
        {this.props.text}
      </div>
    )
  }

}

//TODO: Создайте функциональный компонент FuncComponent
// который отрисует div с текстом FuncComponent

export const FuncComponent: FC<{text: string}> = ({ text }) => {
  return(
    <div>
      {text}
    </div>
  )
}

//TODO: Перепешите компоненты выше на prop text
// в text передайте старые значения

//TODO: Создайте компонент ConditionalComponent
// который показыать GoogleLogoComponent по значению prop'a flag

export const ConditionalComponent: FC<{flag: boolean}> = ({flag}) =>  {
  return (
    flag ? <GoogleLogoComponent/> : null
  )
}


//TODO: Создайте компонент ComponentWithFunction
// который будет принимать prop func и отправлять в div onClick

export const ComponentWithFunction: FC<{func: () => void}> = ({func}) =>{
  return (
    <div onClick = {func}>ComponentWithFunction</div>
  )
}

//TODO: Создайте компонент ComponentWithChild
// который будет принимать потомков и отображать внутри div

export const ComponentWithChild: FC<{children: {}}> = ({children}) => {
 return <div>{children}</div>
}

//TODO: Создайте компонент ComponentWithRenders
// который будет принимать renderFunc и RenderComponent



export const ComponentWithRenders: FC<IComponent> 
  = ({renderFunc, TestComponent}) => {
  return (
    <div>
      {renderFunc()}
      <TestComponent/>
    </div>
  )
}

const func = () => alert("pressed");
const renderFunc = () => <div>renderFunc</div>;
class TestComponent extends React.Component {
  render() {
    return "123";
  }
}

interface IComponent {
  renderFunc: () => ReactNode
  TestComponent: ComponentType
}


//TODO: Добавьте component RenderAll

export function RenderAll() {

  return (
    <div>
      <ClassComponent text={'ClassComponent'}/>
      <FuncComponent text={'FuncComponent'}/>
      <ConditionalComponent flag={true}/>
      <ComponentWithFunction func={func}/>
      <ComponentWithChild>
        <div>
          <p>Sometext</p>
          <h1>Title</h1>
        </div>
      </ComponentWithChild>
      <ComponentWithRenders renderFunc={renderFunc} TestComponent={TestComponent}/>
    </div>
  )

}


// Добавьте prop timer и выведите его
