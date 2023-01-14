
export interface Props {
    name: string
    age: number
}


export interface InputTypes {
    value?: string
    onChangeText?: ((text: string) => void | undefined) | undefined
    placeholder: string
    secureTextEntry: any
    keyboardType?: any
    onFocus?: (() => void) | undefined
    autoCorrect?: boolean
    id?: any
    autoCapitalize?: string
    placeholderTextColor?: string

}

