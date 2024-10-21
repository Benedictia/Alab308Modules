export const assignments1 = [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "NaN",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ];
  
  // Function to calculate learner scores
  export function calculateLearnerScores(submissions) {
    const scores = {};
  
    submissions.forEach(({ learner_id, submission }) => {
      if (!scores[learner_id]) {
        scores[learner_id] = { totalScore: 0, count: 0 };
      }
      
      scores[learner_id].totalScore += submission.score;
      scores[learner_id].count += 1;
    });
  
    // Calculate averages and format the result
    const results = Object.entries(scores).map(([learner_id, { totalScore, count }]) => ({
      learner_id: parseInt(learner_id),
      totalScore,
      averageScore: (totalScore / count)
    }));
  
    return results;
  }

  export function getDueAssignments(assignments) {
    const currentDate = new Date();
  
    const dueAssignments =assignments
      .filter(assignment => new Date(assignment.due_at) < currentDate) // Filter due assignments
      .map(assignment => {
        // Reduce points by 10%
        const reducedPoints = assignment.points_possible * 0.9;
        return {
          ...assignment, // Spread the existing assignment properties
          points_possible: reducedPoints // Override the points_possible with reduced points
        };
      });
  
    return dueAssignments;
  }
  
