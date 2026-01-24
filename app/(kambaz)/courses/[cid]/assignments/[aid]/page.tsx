export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name"><strong>Assignment Name</strong></label> 
            <br></br><br></br>
            <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description" cols={45} rows={10}
                defaultValue="The assignment is available online Submit a 
                link to the landing page of your Web 
                application running on Netlify. The landing 
                page should include the following: Your full 
                name and section Links to each of the lab 
                assignments Link to the Kambas application 
                Links to all relevant source code repositories 
                The Kambas application should include a link 
                to navigate back to the landing page." />
            <br /> <br /> 
            <table>
            <tbody>
                {/* tr -- declares the start of a row */}
                <tr> 
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" defaultValue={100} />
                    </td>
                </tr>

                {/* Complete on your own */}
                <br></br> 
                <tr> 
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="A1">A1</option>
                            <option value="A2">A2</option>
                            <option value="A3">A3</option>
                        </select>
                    </td>
                </tr>

                <br></br> 
                <tr> 
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option selected value="Percentage">Percentage</option>
                            <option value="Fraction">Fraction</option>
                            <option value="Letter">Letter</option>
                            <option value="Integer">Integer</option>
                        </select>
                    </td>
                </tr>


                <br></br> 
                <tr> 
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option selected value="Online">Online</option>
                            <option value="Paper">Paper</option>
                        </select>
                    </td>
                </tr>






                <br></br> 
                <tr>
                    <td></td> 
                    <td align="left" valign="top">
                        <label>Online Entry Options</label>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td align="left" valign="top">
                        <input type="checkbox" id="wd-text-entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label>
                    </td>
                </tr>
                <tr> 
                    <td></td>
                    <td align="left" valign="top">
                        <input type="checkbox" id="wd-website-url" />
                        <label htmlFor="wd-website-url">Website URL </label>
                    </td> 
                </tr>
                <tr>
                    <td></td>
                    <td align="left" valign="top">
                        <input type="checkbox" id="wd-media-recordings" />
                        <label htmlFor="wd-media-recordings">Media Recordings</label>
                    </td> 
                </tr> 
                <tr> 
                    <td></td>
                    <td align="left" valign="top"> 
                        <input type="checkbox" id="wd-student-annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotation</label>
                    </td> 
                </tr> 
                <tr> 
                    <td></td>
                    <td align="left" valign="top"> 
                        <input type="checkbox" id="wd-file-upload" />
                        <label htmlFor="wd-file-upload">File Uploads</label>
                    </td>
                </tr>



                <br />
                <tr>
                    <td align="right" valign="top">
                        <label>Assign</label>
                    </td>    
                    <td align="left" valign="top">
                        <label htmlFor="wd-assign-to">Assign To</label>
                    </td>
                </tr>

                <tr>
                    <td></td>
                    <td align="left" valign="top">
                        <input id="wd-assign-to" type="text" defaultValue="Everyone" />
                    </td>    
                </tr>                
                  


                <br />
                <tr>
                    <td></td>
                    <td align="left" valign="top">
                        <label htmlFor="wd-due-date">Due</label>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input id="wd-due-date"
                               type="date" 
                               defaultValue="2024-05-13" />
                    </td>
                </tr>


                <br /> 
                <tr>
                    <td></td>
                    <td align="left" valign="top">
                        <label htmlFor="wd-available-from">Available From</label>
                    </td>
                    <td align="left" valign="top">
                        <label htmlFor="wd-available-until">Until</label>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td align="left" valign="top">
                        <input id="wd-available-from" 
                               type="date"
                               defaultValue="2024-05-06" />
                    </td>
                    <td align="left" valign="top">
                        <input id="wd-available-until"
                               type="date"
                               defaultValue="2024-05-20" />
                    </td>
                </tr>


                </tbody>

            </table>
            <hr />
            <table width="100%">
                <tfoot>
                    <tr>
                        <td align="right">
                            <button>Cancel</button> <button>Save</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
            
        </div>
);}
