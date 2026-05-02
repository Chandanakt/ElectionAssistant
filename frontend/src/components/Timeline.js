function Timeline() {

  const steps = [
    'Candidate Registration',
    'Election Campaign',
    'Voter Registration',
    'Early Voting',
    'Election Day Voting',
    'Vote Counting',
    'Result Announcement',
    'Government Formation'
  ];

  return (
    <div className="card">

      <h2>📅 Election Timeline</h2>

      {
        steps.map((step, index) => (
          <div className="timeline-step" key={index}>
            {index + 1}. {step}
          </div>
        ))
      }

    </div>
  );
}

export default Timeline;
