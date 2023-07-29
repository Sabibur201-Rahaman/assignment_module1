function gradeCalculate(score){
    let grade;
    switch(true){
        case (score>=90&&score==100):
            grade ='A';
            break;
            case (score>=80&&score<=89):
                grade='B';
                break;
                case (score>=70&&score<=79):
                    grade='C';
                    break;
                    case (score>=60&&score<=69):
                        grade='D';
                        break;
                        case(score<60):
                            grade='F';
    }
    return grade;
}

console.log (`The grade is ${gradeCalculate(75)}`)
// 