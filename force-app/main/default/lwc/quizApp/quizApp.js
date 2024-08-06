import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    isSubmitted = false;

    myQuestions=[
        {
            id: 'Question 1',
            question: 'My First question is',
            answers: {
                a:"option 1",
                b:"option 2",
                c:"option 3"
            },
            correctanswer: "b"
        },
        {
            id: 'Question 2',
            question: 'My Second question is',
            answers: {
                a:"option 1",
                b:"option 2",
                c:"option 3"
            },
            correctanswer: "b"
        },
        {
            id: 'Question 3',
            question: 'My Third question is',
            answers: {
                a:"option 1",
                b:"option 2",
                c:"option 3"
            },
            correctanswer: "c"
        }
    ]
    selected={}
    correctAnswers = 0;
    changeHandler(event){
        console.log('name', event.target.name)
        console.log('value', event.target.value)
        const [name,value] = event.target
        this.selected={...this.selected, name: value}
    }

    get allNotSelected(){
        console.log('selected values length is ' +Object.keys(this.selected).length);
        console.log('selected values length is ' +this.myQuestions.length);
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }

    submitHandler(event){
        console.log('correct answers count is  '+this.correctAnswers);
        event.preventDefault()
        let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctanswer)
        this.correctAnswers = correct.length
        this.isSubmitted = true;
        console.log('correct answers count is  '+this.correctAnswers);

    }

    resetHandler(){
        this.selected = {} 
        this.correctAnswers = 0

    }
}