async function fetchCorrectAnswers() {
    const url = "https://api-lms.celt.vip/api/v2/student-exam/parent-question-ids/734/11539"; // Example API

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0Mzc5MzFjNC1lMDE1LTQzMTgtYTFjZC1lN2EwYmY5ZWFkZTkiLCJqdGkiOiI1NTJjNGFmY2I3MzEzODE1MzQ0YzI1ZTE3YmQ1MGFlZmRlYTA0ZGRhZDc3YjY3ODZhNWE5ZmZmNmU0YTExZjc5ZDJhZWJhYmY4MTI3MTY4MSIsImlhdCI6MTc0MTA4MDUzNy42NzYwNjEsIm5iZiI6MTc0MTA4MDUzNy42NzYwNjYsImV4cCI6MTc3MjYxNjUzNy42NTkxMjYsInN1YiI6IjExNTM5Iiwic2NvcGVzIjpbIioiXX0.dytRmqPZGHpLim0KCWSgpo3iFVOTRFADJH1TAXfgfKgW946HVCAffcw2saQo0J4ENL1J89nXQycSOshT1NbSYNorwSRfvQVCaVKFkKOGqwW83yhKTmOYwNREnzpRCdT-R6V5U-1ZxYNMwoVpXs4Rkk-dZD0WK6Yl9sK4T3l52tTxefHLLm1CpjOW1JxqkQ7ghnMmioKYetWdt4k7RFzEIsOX2ok3G8WS7gy64j0ISsdHMhzSX7mtA2UDpwp0eu_MviXdznsib-XBtk6LNbhNuBUkLEOua_RfvIYqg4oQpV__3nU7bM2csmj3E44FZJYPAziLT-mKcW5iXteVedKASu2dstYiqNqZbtXCrGXYTsZB3p7S96D0PnbDoX_73SoVRUkx7qDBQlfqRTqO_rYx8A8-Bs8S4Jn2YZ6dSGO1lF1MyP2IIuKv5E0q5_-3csrWXYMah97Q_gA3KXqsR8Zl5afcbmRN-uDLIPuj90qrvoy_FOvHgwIGStAZc3NInlezoFUNK8hFd5v3vDsmXyaHY1c0Ja7kfHG8KhsciTIVFyFLNrUsDoT5eQOdHCgMA-PtYk77s9XIIy_77poqXJO8cwca11vQPL2c0VwPURIJHwbYhwCbh3_EAE8O25qvBdLjFnq1HWuGwM9934Bg7gtsIdQVgHxRxRyVpEsEJFVW29A", // Replace if required
                "Accept": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        data[0].student_exam_questions.forEach(question => {
            const questionTitle = question.title;
            const studentAnswer = question.given_answer ? question.given_answer.title : "No answer";

            // 🔥 FIX: Find the correct answer manually from `student_exam_question_answers`
            let correctAnswer = "No correct answer available";
            question.student_exam_question_answers.forEach(answer => {
                if (answer.correct_full_url) {
                    correctAnswer = answer.title; // Directly gets A, B, C, or D
                }
            });

            console.log(`Question: ${questionTitle}`);
            console.log(`Student's Answer: ${studentAnswer}`);
            console.log(`Correct Answer: ${correctAnswer}`);
            console.log("------------------------");
        });

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Call function to fetch answers
fetchCorrectAnswers();
