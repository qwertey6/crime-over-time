import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import LineC from './LineChart';
import LineA from './LineChartAbortion';
import PollutionCloudMap from './PollutionCloudMap';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="heading">
                    <h1>Crime Over Time</h1>
                    <h2>An Investigation of Crime in the US from 1960 - 2014</h2>
                    <h3>Jacob Kapan and Kit Zellerbach</h3>
                    <div className="container">It is interesting to see what external factors drive human behavior,
                        especially when it drives
                        someone to do something drastic (commit crimes). This visualization allows
                        users to explore the co-occurrence of reduced crime rates with birth control and unleaded
                        gasoline.
                    </div>
                </div>
                <div className="section">
                    <h2>The Lead Problem</h2>
                    <p>Tetraethyllead (commonly styled tetraethyl lead), abbreviated TEL, is an organolead compound. TEL
                        is a petro-fuel additive, first being mixed with gasoline (petrol)
                        beginning in the 1920s as a patented octane rating booster that allowed engine compression to be
                        raised substantially. This in turn caused increased vehicle performance and fuel economy. TEL
                        levels in automotive fuel were reduced in the 1970s under the U.S. Clean Air Act in two
                        overlapping programs: to protect catalytic converters, which mandated unleaded gasoline for
                        those vehicles; and to protect public health, which mandated lead reductions in annual phases
                        (the "lead phasedown").<a
                            href="https://en.wikipedia.org/wiki/Tetraethyllead"><sup>[1]</sup></a></p>
                </div>
                <PollutionCloudMap/>
                <div className="section">
                    <h2>Lead–crime hypothesis</h2>
                    <p>The lead–crime hypothesis is the proposed link between elevated blood lead levels in children and
                        increased rates of crime, delinquency, and recidivism later in life. The lead-crime hypothesis
                        arose out of the confluence of several events, primarily the decrease in crime rates in the
                        1990s and the reduction of environmental lead pollution in the 1970s.<a
                            href="https://en.wikipedia.org/wiki/Lead%E2%80%93crime_hypothesis"><sup>[2]</sup></a></p>
                </div>
                <LineC/>
                <div className="section">
                    <h2>Legalized abortion and crime effect</h2>
                    <p>The effect of legalized abortion on crime (also the Donohue–Levitt hypothesis) is a hypothesized
                        controversial reduction in crime in the decades following the legalization of abortion, as a
                        result of fewer children at the highest risk of committing crime being born due to the
                        availability of the procedure.
                        Donohue and Levitt suggest that the absence of unwanted children, following legalization in
                        1973, led to a reduction in crime 18 years later, starting in 1992 and dropping sharply in 1995.
                        These would have been the peak crime-committing years of the unborn children.<a
                            href="https://en.wikipedia.org/wiki/Legalized_abortion_and_crime_effect"><sup>[3]</sup></a>
                    </p>
                </div>
                <LineA/>
            </div>
        );
    }
}

export default App;
