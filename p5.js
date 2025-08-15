function resultReport(marks) {

    if (Array.isArray(marks)) {

        let totalMarks = 0;
        let passes = 0;
        let fails = 0;

        for (let i = 0; i < marks.length; i++) {
            let mark = marks[i];
            totalMarks = totalMarks + mark;

            if (mark >= 40) {
                passes = passes + 1;
            }
            else {
                fails = fails + 1;
            }
        }

        let average = 0;
        if (marks.length > 0) {
            average = Math.round(totalMarks / marks.length);
        }

        let finalResult = {
            finalScore: average,
            pass: passes,
            fail: fails
        }

        return finalResult;
    }
    else {
        return "Invalid";
    }
}
