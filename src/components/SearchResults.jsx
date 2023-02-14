import React from 'react';
import Button from "react-bootstrap/Button";


function SearchResults(props) {
  return (
      <div style={{padding: '25px'} }>
          
          {
              
            
              props.results.map((name, key) => {
                    if (props.results.length === 0) {
                    } else {
                      if (name.sex === "m") {
                        return (
                          <Button
                            style={{ margin: "5px" }}
                            variant="outline-primary"
                            key={key}
                            className="btn --bs-primary-border-subtle"
                          >
                            {name.name}
                          </Button>
                        );
                      } else {
                        return (
                          <Button
                            style={{ margin: "5px" }}
                            variant="outline-danger"
                            key={key}
                            //   className="btn btn-success"
                          >
                            {name.name}
                          </Button>
                        );
                      }
                    }
              }
              )

          }
              
              
         
    </div>
  );
}

export default SearchResults