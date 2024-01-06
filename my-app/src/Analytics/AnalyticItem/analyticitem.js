import React from 'react';

class AnalyseItem extends React.Component {
    render() {
        return <div class={this.props.className}>
                    <div class="status">
                        <div class="info">
                            <h3>{this.props.title}</h3>
                            <h1>{this.props.number}</h1>
                        </div>
                        <div class="progress">
                            <svg>
                                <circle cx="38" cy="38" r="36"></circle>
                            </svg>
                            <div class="percentage">
                                {this.props.percentage}
                            </div>
                        </div>
                    </div>
                </div>
    }
  }

export default AnalyseItem;