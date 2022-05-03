import React from "react"
import Button from "../../components/Button"
import Checkbox from "../../components/Checkbox"
import Input from "../../components/Input"
import Layout from "../../components/Layout"
import Switch from "../../components/Switch"
import Text from "../../components/Text"

const TestZone = ({navigation}) => {
    const [state, setState] = React.useState(0)
    return <Layout style={{}}>
        <Text>Hello world</Text>
        <Button text="Jitsi" onPress={() => {navigation.push('Jitsi', {id: "HelloThere"})}}/>
        <Button type={2} text="Upload Test" onPress={() => {navigation.push('UploadImage')}}/>
        <Button type={3} text="Hello"/>
        <Button type={4} text="Hello"/>
        <Button disabled text="Hello"/>
        <Button disabled type={2} text="Hello"/>
        <Button disabled type={3} text="Hello"/>
        <Button disabled type={4} text="Hello"/>
        <Input label={"Label"} hint={"Hint"} placeholder={"Hello world!"}/>
        <Switch/>
        <Checkbox id={0} state={state} setState={setState}/>
        <Checkbox id={1} state={state} setState={setState}/>
        <Checkbox id={2} state={state} setState={setState}/>
        <Checkbox id={3} state={state} setState={setState}/>
        <Checkbox id={4} state={state} setState={setState}/>
        <Checkbox id={5} state={state} setState={setState}/>
        <Checkbox id={6} state={state} setState={setState}/>
    </Layout>
}

export default TestZone