import React from 'react';

function About() {
  return (
    <div>
      <h1>My Profile</h1>

      {/* Profile Picture */}
      <img
        src="https://example.com/sample-photo.jpg"
        alt="Sample Photo"
        style={{ width: '150px', borderRadius: '50%', marginBottom: '20px' }}
      />

      {/* Profile Information in a Table */}
      <table style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td><strong>Name:</strong></td>
            <td>Sindhuja</td>
          </tr>
          <tr>
            <td><strong>Department:</strong></td>
            <td>CSE HONOURS</td>
          </tr>
          <tr>
            <td><strong>10th Marks:</strong></td>
            <td>90%</td>
          </tr>
          <tr>
            <td><strong>Intermediate Marks:</strong></td>
            <td>85%</td>
          </tr>
          <tr>
            <td><strong>Current CGPA:</strong></td>
            <td>8.7</td>
          </tr>
          <tr>
            <td><strong>Expectation Towards Placement:</strong></td>
            <td>Aiming for challenging opportunities in my field of study.</td>
          </tr>
          <tr>
            <td><strong>Expected Salary:</strong></td>
            <td>$70,000 per annum</td>
          </tr>
        </tbody>
      </table>

      {/* Additional Information in Paragraph */}
      <p>
        I am a passionate and dedicated individual seeking a rewarding career in my chosen field.
        My academic achievements reflect my commitment to excellence, and I look forward to contributing
        my skills and knowledge to a dynamic work environment.
      </p>
    </div>
  );
}

export default About;
