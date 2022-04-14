const BusinessTable = ({ body }) => (
  <table>
    <thead>
      <tr>
        <th>Key</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Names</td>
        <td>{body.names.map((n) => n.content).join(", ")}</td>
      </tr>
      <tr>
        <td>Principal Address</td>
        <td>{body.principalAddress}</td>
      </tr>
      <tr>
        <td>Mailing Address</td>
        <td>{body.mailingAddress}</td>
      </tr>
      <tr>
        <td>CEO</td>
        <td>{`${body.ceo}`}</td>
      </tr>
      <tr>
        <td>CEO Phone</td>
        <td>{`${body.ceoPhone}`}</td>
      </tr>
      <tr>
        <td>CEO Email</td>
        <td>{`${body.ceoEmail}`}</td>
      </tr>
      <tr>
        <td>Other POC</td>
        <td>{`${body.otherPoc}`}</td>
      </tr>
      <tr>
        <td>Other POC Phone</td>
        <td>{`${body.otherPocPhone}`}</td>
      </tr>
      <tr>
        <td>Other POC Email</td>
        <td>{`${body.otherPocEmail}`}</td>
      </tr>
      <tr>
        <td>TIN</td>
        <td>{`${body.tin}`}</td>
      </tr>
      <tr>
        <td>Woman Owned</td>
        <td>{`${body.womanOwned}`}</td>
      </tr>
      <tr>
        <td>Veteran Owned</td>
        <td>{`${body.veteranOwned}`}</td>
      </tr>
      <tr>
        <td>Minority Certified</td>
        <td>{`${body.minorityCertified}`}</td>
      </tr>
      <tr>
        <td>Year Est.</td>
        <td>{body.year}</td>
      </tr>
      <tr>
        <td>Business Type</td>
        <td>{`${body.type}`}</td>
      </tr>
      <tr>
        <td>Number Of Employees</td>
        <td>{`${body.employees}`}</td>
      </tr>
      <tr>
        <td>Revenue "Last 3 years"</td>
        <td>{`${body.revenue}`}</td>
      </tr>
      <tr>
        <td>Industry</td>
        <td>{body.industry}</td>
      </tr>
      <tr>
        <td>NAICS Code</td>
        <td>{`${body.naicsCode}`}</td>
      </tr>
    </tbody>
  </table>
);

export default BusinessTable;
