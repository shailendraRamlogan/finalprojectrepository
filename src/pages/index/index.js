import React, { Component } from "react";
import "./index.css";
import axios from "axios";
import ReactTooltip from "react-tooltip";

class Index extends Component {

  submitRequest = e => {
    e.preventDefault();
    var lang = document.getElementById("langDrop").value;
    var userId = document.getElementById("userBox").value;
    var cString = document.getElementById("commentParameter").value;
    var threshold = document.getElementById("legitParameter").value;
    var useDir = document.getElementById("sameDirCheck").value;
    var useServer = document.getElementById("validateCheck").value;
    var matches = document.getElementById("matchParameter").value;
    var params = {
      language: lang,
      userid: userId,
      comment: cString,
      thresh: threshold,
      match: matches,
      dirMode: useDir,
      server: useServer
    };
    var url = "http://18.218.36.119/example.php";
    axios.post(url, params).then(function(response) {
      window.open(response.data);
      window.location.reload(true);
    });
  };

  handleBaseClick = () =>{
    document.getElementById("baseFile").click();

  };

  handleSourceClick = () =>{
    document.getElementById("sourceFile").click();

  };

  uploadingBaseFiles = e =>{
    e.preventDefault();
    var output = document.getElementById("returnBase");
    var data = new FormData();
    var files = document.getElementById("baseFile").files;
    for (let i = 0; i < files.length; i++) {
      let file = files[i]
      data.append('files[]', file)
    }
    axios.post('http://18.218.36.119/handleBaseFileUpload.php', data).then(function(response) {
      output.innerHTML += (response.data);
    });
      
  }


  uploadingSourceFiles = e =>{
    e.preventDefault();
    var output = document.getElementById("returnSource");
    var data = new FormData();
    var files = document.getElementById("sourceFile").files;
    for (let i = 0; i < files.length; i++) {
      let file = files[i]
      data.append('files[]', file)
    }
    axios.post('http://18.218.36.119/handleSourceFileUpload.php', data).then(function(response) {
      output.innerHTML += (response.data);
    });
      
  }

  render() {
    return (
      <div className="App">
        <br />
        <form className="inputForm">
          <div id="middle">
            <div id="firstRow">
              <p id="userId" data-tip data-for="userId">
                User ID:
              </p>
              <input id="userBox" type="number" />
              <ReactTooltip
                id="userId"
                className="tooltip"
                effect="solid"
                place="bottom"
              >
                <span>
                  For information on how to get a user ID please click the "Get
                  User Id" navigation button
                </span>
              </ReactTooltip>
              <p id="language" data-tip data-for="language">
                Language
              </p>
              <ReactTooltip
                id="language"
                className="tooltip"
                effect="solid"
                place="bottom"
              >
                <span>
                  Please select the programming language of the files you wish
                  to validate
                </span>
              </ReactTooltip>
              <select id="langDrop" className="langDrop" name="Languages">
                <option value="java">Java</option>
                <option value="c++">C++</option>
                <option value="c">C</option>
                <option value="c#">C#</option>
                <option value="python">Python</option>
                <option value="visualbasic">Visual Basic</option>
                <option value="javascript">Javascript</option>
                <option value="fortran">FORTRAN</option>
                <option value="ml">ML</option>
                <option value="haskell">Haskell</option>
                <option value="lisp">Lisp</option>
                <option value="scheme">Scheme</option>
                <option value="pascal">Pascal</option>
                <option value="modula2">Modula2</option>
                <option value="ada">Ada</option>
                <option value="perl">Perl</option>
                <option value="tcl">TCL</option>
                <option value="mathlab">Mathlab</option>
                <option value="vhdl">VHDL</option>
                <option value="verilog">Verilog</option>
                <option value="spice">Spice</option>
                <option value="mips assembly">MIPS assembly</option>
                <option value="a8086 assembly">a8086 assembly</option>
                <option value="hcl2">HCL2</option>
              </select>
            </div>
            <br />
            <div id="secondRow">
              <p id="validate" data-tip data-for="validate">
                Use Experimental Server:
              </p>
              <ReactTooltip
                id="validate"
                className="tooltip"
                effect="solid"
                place="bottom"
              >
                <span>
                  Please check this box if you wish to validate your files using
                  the Moss experimental server
                </span>
              </ReactTooltip>
              <input
                id="validateCheck"
                name="Use experimental server"
                type="checkbox"
              />
              <p id="sameDirectory" data-tip data-for="sameDirectory">
                Group Files By Directory:
              </p>
              <ReactTooltip
                id="sameDirectory"
                className="tooltip"
                effect="solid"
                place="bottom"
              >
                <span>
                  Please check this box if you wish to group files by the
                  directory they exist in
                </span>
              </ReactTooltip>
              <input
                id="sameDirCheck"
                name="Use directory mode"
                type="checkbox"
              />
            </div>
            <br />
            <div id="thirdRow">
              <p id="legit" data-tip data-for="legit">
                Legitimacy Threshold:
              </p>
              <ReactTooltip
                id="legit"
                className="tooltip"
                effect="solid"
                place="bottom"
              >
                <span>
                  This number is used to specify the number of files a piece of
                  code may occour in before it is regarded as a piece of code
                  that must exist in all scripts being validated
                </span>
              </ReactTooltip>
              <input
                id="legitParameter"
                className="legitParameter"
                name="Legitimacy threshold"
                type="number"
                defaultValue="10"
              />
              <p id="matches" data-tip data-for="matches">
                # Matching Files (def):
              </p>
              <ReactTooltip
                id="matches"
                className="tooltip"
                effect="solid"
                place="bottom"
              >
                <span>
                  This number is used to specify the number of matching files
                  presented in the result
                </span>
              </ReactTooltip>
              <input
                id="matchParameter"
                className="matchParameter"
                name="Option n"
                type="number"
                defaultValue="350"
              />
              <p id="comment" data-tip data-for="comment">
                Comment String (apn):
              </p>
              <ReactTooltip
                id="comment"
                className="tooltip"
                effect="solid"
                place="bottom"
              >
                <span>
                  This parameter is used to specify a string to be attached to
                  the report which will be generated
                </span>
              </ReactTooltip>
              <input
                id="commentParameter"
                className="commentParameter"
                name="Option c"
                type="text"
              />
              <br />
            </div>
          </div>
          <br />
          </form >
          <form encType="multipart/form-data">
          <ul className="buttonRow">
            <li className="buttonR">
              
              <input type="file" id="baseFile" multiple="multiple" hidden="hidden"onChange={e =>this.uploadingBaseFiles(e)}/>
              <button data-tip data-for="baseFilesTip" className="buttonElement" onClick={this.handleBaseClick}>Choose Base Files</button>
              <ReactTooltip
                id="baseFilesTip"
                className="tooltip"
                effect="solid"
                place="bottom"
              >
                <span>Upload base files</span>
              </ReactTooltip>
            </li>
            <li className="buttonR">
              <input type="file" id="sourceFile" multiple="multiple" hidden="hidden"onChange={e =>this.uploadingSourceFiles(e)}/>
              <button data-tip data-for="sourceFilesTip" className="buttonElement" onClick={this.handleSourceClick}>Choose Source Files</button>

              <ReactTooltip
                id="sourceFilesTip"
                className="tooltip"
                effect="solid"
                place="bottom"
              >
                <span>
                  Upload source files with unique names identifying each
                  students submission
                </span>
              </ReactTooltip>
            </li>
            <li className="buttonR">
              <button
                className="buttonElement"
                name="Send request"
                onClick={e => this.submitRequest(e)}
              >
                Send Request
              </button>
            </li>
          </ul>
          <br />
        </form>
        <div className="return">
          <div className="returnBox">
            <h3 align="center">Base Files</h3>
            <textarea
              id="returnBase"
              type="text"
              className="inlineTextArea"
              name="uploadedFiles"
              readOnly="True"
              style={{ width: 600, height: 300 }}
            />
          </div>
          <div className="returnBox">
            <h3 align="center">Source Files</h3>
            <textarea
              id="returnSource"
              type="text"
              className="inlineTextArea"
              name="uploadedFiles"
              readOnly="True"
              style={{ width: 600, height: 300 }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
