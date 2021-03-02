import './App.css';
import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Container,
    Grid,
    IconButton,
    makeStyles,
    TextField, Typography
} from "@material-ui/core";
import ButtonC from "./component/ButtonC";
import {useState} from "react";
import {FaGithub} from "react-icons/all";

const useStyles = makeStyles((Theme) => ({
    textShow: {
        "text-align-last": "end",
        "width": "100%",
    },
    divMain: {
        "max-width": "30vw",
        "min-width": "-webkit-fill-available",
        "min-width": "-moz-available",
    },
}))

function App() {
    const classes = useStyles();
    const [isValue, setValue] = useState("0");
    const [isdecimal, setdecimal] = useState(false);

    function f(value) {
        const tagName = value.target.innerText
        const opperators = ['+','-','*','/']
        if (opperators.includes(tagName)) {
            if (tagName !== '-' && tagName === isValue[isValue.length -1]) {
                // console.log("Opperator dup: true")
                return
            }
            if (opperators.includes(isValue[isValue.length -1]) && opperators.includes(isValue[isValue.length -2])){
                setValue(prevState => {
                    return prevState.replace(prevState[prevState.length -1],'').replace(prevState[prevState.length -2],'')
                })
            }
            setdecimal(false)
        }
        if (tagName === 'C') {
            setdecimal(false)
            return setValue("0");
        } else if (tagName === "."){
            if (isdecimal === false) {
                setdecimal(true)
            } else {
                return
            }
            if ( isValue[isValue.length -1] === ".") return

        } else if (tagName === '=') {
            // console.log(isValue,eval(isValue))
            return setValue(eval(isValue));
        }
        // console.log(value)
        // console.log(value.target.innerText);
        setValue(prevState => {
            if (prevState === "0" && opperators.includes(tagName) === false) {
                return tagName
            }
            return prevState + tagName
        })
    }

    return (
        <Container>
            <Card variant={"outlined"}>
                <CardHeader title={"Calculator"}/>
                <CardContent className={classes.divMain}>
                    <Grid container >
                        <Grid item xs={12} style={{paddingBottom: "1rem"}}>
                            <TextField id={"display"} variant={"outlined"} disabled value={isValue} className={classes.textShow}/>
                        </Grid>
                        <ButtonC id={"clear"} name={"C"} size={3} click={f}/>
                        <ButtonC id="divide" name={"/"} size={3} click={f}/>
                        <ButtonC id="multiply" name={"*"} size={3} click={f}/>
                        <ButtonC id="subtract" name={"-"} size={3} click={f}/>
                        <Grid container item xs={12}>
                            <Grid container item xs={9}>
                                <ButtonC id={"seven"} name={"7"} size={4} click={f}/>
                                <ButtonC id="eight" name={"8"} size={4} click={f}/>
                                <ButtonC id="nine" name={"9"} size={4} click={f}/>
                                <ButtonC id="four" name={"4"} size={4} click={f}/>
                                <ButtonC id="five" name={"5"} size={4} click={f}/>
                                <ButtonC id="six" name={"6"} size={4} click={f}/>
                            </Grid>
                            <ButtonC id="add" name={"+"} size={3} click={f}/>
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid container item xs={9}>
                                <ButtonC id="one" name={"1"} size={4} click={f}/>
                                <ButtonC id="two" name={"2"} size={4} click={f}/>
                                <ButtonC id="three" name={"3"} size={4} click={f}/>
                                <ButtonC id="zero" name={"0"} size={8} click={f}/>
                                <ButtonC id="decimal" name={"."} size={4} click={f}/>
                            </Grid>
                            <ButtonC id="equals" name={"="} size={3} click={f}/>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Typography color={"textSecondary"} variant={"body2"} style={{flexGrow:1}}>By Ahsan Iqbal</Typography>
                    <IconButton href={"https://github.com/AxanIqbal/javascript-calculator"}>
                        <FaGithub/>
                    </IconButton>
                </CardActions>
            </Card>
        </Container>
    );
}

export default App;
