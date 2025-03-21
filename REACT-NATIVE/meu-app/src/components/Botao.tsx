import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { Feather } from '@expo/vector-icons'

type BotaoProps = {
    icone: 'log-in' | 'menu' | 'user-plus',
    texto: string,
    cor: string
}

export default function Botao(props : BotaoProps){
    return(
        <TouchableOpacity style={[styles.button, {backgroundColor: props.cor}]}>
                <Feather name={ props.icone } size={22} color='#fff'/>
                <Text style={styles.buttonText}>{ props.texto }</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button:{
        marginTop: 16,
        backgroundColor: "#888",
        padding: 16,
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        flexDirection: 'row',
    },
    buttonText:{
        fontSize: 22,
        color: "#fff",
        marginLeft: 8
    },

    
})