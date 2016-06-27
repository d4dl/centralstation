import React, { PropTypes, Component } from 'react';
import {Pagination, Panel, Well, Button, PageHeader} from "react-bootstrap";
import RestEmployees from "../../../common/RestEmployees";

var Tables = React.createClass({

  render: function() {
    return (

      <div>
        <div className="col-lg-12"> 
          <PageHeader>Tables</PageHeader> 
        </div>

        <div className="col-lg-12"> 
        	<Panel header={<span>FixEZ - Repairs Universe - Strive Order Review</span>} >
              <RestEmployees>
              </RestEmployees>
       			<div>
       				<div className="dataTable_wrapper">
                <div id="dataTables-example_wrapper" className="dataTables_wrapper form-inline dt-bootstrap no-footer">
                  
                  <div className="row">
                    <div className="col-sm-9">
                      <div className="dataTables_length" id="dataTables-example_length">
                        <label>Show <select name="dataTables-example_length" aria-controls="dataTables-example" className="form-control input-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div id="dataTables-example_filter" className="dataTables_filter">
                        <label>Search:<input type="search" className="form-control input-sm" placeholder="" aria-controls="dataTables-example" /></label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-12">
                      <table className="table table-striped table-bordered table-hover dataTable no-footer" id="dataTables-example" role="grid" aria-describedby="dataTables-example_info">
                        <thead>
                          <tr role="row"><th className="sorting_asc" tabIndex="0" aria-controls="dataTables-example" rowSpan="1" colSpan="1" aria-label="Site: activate to sort column descending" aria-sort="ascending" style={ {width: 265} }>Site</th><th className="sorting" tabIndex="0" aria-controls="dataTables-example" rowSpan="1" colSpan="1" aria-label="Fraud Rule: activate to sort column ascending" style={ {width: 321} }>Fraud Rule</th><th className="sorting" tabIndex="0" aria-controls="dataTables-example" rowSpan="1" colSpan="1" aria-label="Price activate to sort column ascending" style={ {width: 299} }>Price</th><th className="sorting" tabIndex="0" aria-controls="dataTables-example" rowSpan="1" colSpan="1" aria-label="Customer: activate to sort column ascending" style={ {width: 231} }>Customer</th><th className="sorting" tabIndex="0" aria-controls="dataTables-example" rowSpan="1" colSpan="1" aria-label="Status: activate to sort column ascending" style={ {width: 180} }>Status</th></tr>
                        </thead>
                        <tbody>               
                          <tr className="gradeA odd" role="row">
                            <td className="sorting_1">Strive</td>
                            <td>PaypalExpress</td>
                            <td>$390.89</td>
                            <td className="center">Bob Marley</td>
                            <td className="center">Hold</td>
                          </tr>
                          <tr className="gradeA even" role="row">
                            <td className="sorting_1">Strive</td>
                            <td>PaypalExpress</td>
                            <td>$&nbsp;56.98</td>
                            <td className="center">Charles Hadley</td>
                            <td className="center">Hold</td>
                          </tr>
                          <tr className="gradeA odd" role="row">
                            <td className="sorting_1">Repairs Universe</td>
                            <td>Blacklisted Country (Florida)</td>
                            <td>$128.09</td>
                            <td className="center">Harold MacMillan</td>
                            <td className="center">Waiting for CC Image</td>
                          </tr>
                          <tr className="gradeA even" role="row">
                            <td className="sorting_1">Strive</td>
                            <td>Blacklisted Country (Nigeria)</td>
                            <td>$459.02</td>
                            <td className="center">Gregory Smitchen</td>
                            <td className="center">Pending Review</td>
                          </tr>
                          <tr className="gradeA odd" role="row">
                            <td className="sorting_1">Strive</td>
                            <td>Address Mismatch</td>
                            <td>$567.89</td>
                            <td className="center">Peggy Sanchez</td>
                            <td className="center">Hold</td>
                          </tr>
                          <tr className="gradeA even" role="row">
                            <td className="sorting_1">FixEZ</td>
                            <td>Known Fraudster</td>
                            <td>$213.43</td>
                            <td className="center">Hank Tidderblit</td>
                            <td className="center">Hold</td>
                          </tr>
                          <tr className="gradeA odd" role="row">
                            <td className="sorting_1">FixEZ</td>
                            <td>Cost threshold</td>
                            <td>$5900.89</td>
                            <td className="center">Prince Patimpkin</td>
                            <td className="center">Hold</td>
                          </tr>
                          <tr className="gradeA even" role="row">
                            <td className="sorting_1">FixEZ</td>
                            <td>No Address</td>
                            <td>$678.90</td>
                            <td className="center">Tamara Smith</td>
                            <td className="center">Hold</td>
                          </tr>
                          <tr className="gradeA odd" role="row">
                            <td className="sorting_1">FixEZ</td>
                            <td>Address Mismatch</td>
                            <td>$546.89</td>
                            <td className="center">Sally Newbonkiwan</td>
                            <td className="center">Hold</td>
                          </tr>
                          <tr className="gradeA even" role="row">
                            <td className="sorting_1">Repairs Universe</td>
                            <td>Address Mismatch</td>
                            <td>$448.90</td>
                            <td className="center">Jim Detack</td>
                            <td className="center">Hold</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="dataTables_info" id="dataTables-example_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div>
                    </div>
                    <div className="col-sm-6" pullRight >
                      <Pagination activePage={1}
                        items={6} perPage={10} 
                        first={true} last={true}
                        prev={true} next={true}
                        onSelect={ (pageNumber) => {} } />  
                    </div>
                  </div>
                </div>
              </div>
                  <Well>
                    <h4>Usage Information</h4>
                    <p>Anything goes here that might facilitate the workflow of the order reviewer.  It likely could all be outsourced.<a target="_blank" href="https://datatables.net/">'https://datatables.net/'</a>.</p>
                    <Button bsSize="large" block href="https://datatables.net/">View Information</Button>
                  </Well>
                </div>
          </Panel>
        </div>

      </div> 
    );
  }

});

export default Tables;
