/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 769.0, "minX": 0.0, "maxY": 838.0, "series": [{"data": [[0.0, 769.0], [0.1, 769.0], [0.2, 769.0], [0.3, 769.0], [0.4, 769.0], [0.5, 769.0], [0.6, 769.0], [0.7, 769.0], [0.8, 769.0], [0.9, 769.0], [1.0, 769.0], [1.1, 769.0], [1.2, 769.0], [1.3, 769.0], [1.4, 769.0], [1.5, 769.0], [1.6, 769.0], [1.7, 769.0], [1.8, 769.0], [1.9, 769.0], [2.0, 769.0], [2.1, 769.0], [2.2, 769.0], [2.3, 769.0], [2.4, 769.0], [2.5, 769.0], [2.6, 769.0], [2.7, 769.0], [2.8, 769.0], [2.9, 769.0], [3.0, 769.0], [3.1, 769.0], [3.2, 769.0], [3.3, 769.0], [3.4, 769.0], [3.5, 769.0], [3.6, 769.0], [3.7, 769.0], [3.8, 769.0], [3.9, 769.0], [4.0, 769.0], [4.1, 769.0], [4.2, 769.0], [4.3, 769.0], [4.4, 769.0], [4.5, 769.0], [4.6, 769.0], [4.7, 769.0], [4.8, 769.0], [4.9, 769.0], [5.0, 769.0], [5.1, 769.0], [5.2, 769.0], [5.3, 769.0], [5.4, 769.0], [5.5, 769.0], [5.6, 769.0], [5.7, 769.0], [5.8, 769.0], [5.9, 769.0], [6.0, 769.0], [6.1, 769.0], [6.2, 769.0], [6.3, 769.0], [6.4, 769.0], [6.5, 769.0], [6.6, 769.0], [6.7, 769.0], [6.8, 769.0], [6.9, 769.0], [7.0, 769.0], [7.1, 769.0], [7.2, 769.0], [7.3, 769.0], [7.4, 769.0], [7.5, 769.0], [7.6, 769.0], [7.7, 769.0], [7.8, 769.0], [7.9, 769.0], [8.0, 769.0], [8.1, 769.0], [8.2, 769.0], [8.3, 769.0], [8.4, 769.0], [8.5, 769.0], [8.6, 769.0], [8.7, 769.0], [8.8, 769.0], [8.9, 769.0], [9.0, 769.0], [9.1, 769.0], [9.2, 769.0], [9.3, 769.0], [9.4, 769.0], [9.5, 769.0], [9.6, 769.0], [9.7, 769.0], [9.8, 769.0], [9.9, 769.0], [10.0, 769.0], [10.1, 769.0], [10.2, 769.0], [10.3, 769.0], [10.4, 769.0], [10.5, 769.0], [10.6, 769.0], [10.7, 769.0], [10.8, 769.0], [10.9, 769.0], [11.0, 769.0], [11.1, 769.0], [11.2, 769.0], [11.3, 769.0], [11.4, 769.0], [11.5, 769.0], [11.6, 769.0], [11.7, 769.0], [11.8, 769.0], [11.9, 769.0], [12.0, 769.0], [12.1, 769.0], [12.2, 769.0], [12.3, 769.0], [12.4, 769.0], [12.5, 769.0], [12.6, 769.0], [12.7, 769.0], [12.8, 769.0], [12.9, 769.0], [13.0, 769.0], [13.1, 769.0], [13.2, 769.0], [13.3, 769.0], [13.4, 769.0], [13.5, 769.0], [13.6, 769.0], [13.7, 769.0], [13.8, 769.0], [13.9, 769.0], [14.0, 769.0], [14.1, 769.0], [14.2, 769.0], [14.3, 769.0], [14.4, 769.0], [14.5, 769.0], [14.6, 769.0], [14.7, 769.0], [14.8, 769.0], [14.9, 769.0], [15.0, 769.0], [15.1, 769.0], [15.2, 769.0], [15.3, 769.0], [15.4, 769.0], [15.5, 769.0], [15.6, 769.0], [15.7, 769.0], [15.8, 769.0], [15.9, 769.0], [16.0, 769.0], [16.1, 769.0], [16.2, 769.0], [16.3, 769.0], [16.4, 769.0], [16.5, 769.0], [16.6, 769.0], [16.7, 769.0], [16.8, 769.0], [16.9, 769.0], [17.0, 769.0], [17.1, 769.0], [17.2, 769.0], [17.3, 769.0], [17.4, 769.0], [17.5, 769.0], [17.6, 769.0], [17.7, 769.0], [17.8, 769.0], [17.9, 769.0], [18.0, 769.0], [18.1, 769.0], [18.2, 769.0], [18.3, 769.0], [18.4, 769.0], [18.5, 769.0], [18.6, 769.0], [18.7, 769.0], [18.8, 769.0], [18.9, 769.0], [19.0, 769.0], [19.1, 769.0], [19.2, 769.0], [19.3, 769.0], [19.4, 769.0], [19.5, 769.0], [19.6, 769.0], [19.7, 769.0], [19.8, 769.0], [19.9, 769.0], [20.0, 774.0], [20.1, 774.0], [20.2, 774.0], [20.3, 774.0], [20.4, 774.0], [20.5, 774.0], [20.6, 774.0], [20.7, 774.0], [20.8, 774.0], [20.9, 774.0], [21.0, 774.0], [21.1, 774.0], [21.2, 774.0], [21.3, 774.0], [21.4, 774.0], [21.5, 774.0], [21.6, 774.0], [21.7, 774.0], [21.8, 774.0], [21.9, 774.0], [22.0, 774.0], [22.1, 774.0], [22.2, 774.0], [22.3, 774.0], [22.4, 774.0], [22.5, 774.0], [22.6, 774.0], [22.7, 774.0], [22.8, 774.0], [22.9, 774.0], [23.0, 774.0], [23.1, 774.0], [23.2, 774.0], [23.3, 774.0], [23.4, 774.0], [23.5, 774.0], [23.6, 774.0], [23.7, 774.0], [23.8, 774.0], [23.9, 774.0], [24.0, 774.0], [24.1, 774.0], [24.2, 774.0], [24.3, 774.0], [24.4, 774.0], [24.5, 774.0], [24.6, 774.0], [24.7, 774.0], [24.8, 774.0], [24.9, 774.0], [25.0, 774.0], [25.1, 774.0], [25.2, 774.0], [25.3, 774.0], [25.4, 774.0], [25.5, 774.0], [25.6, 774.0], [25.7, 774.0], [25.8, 774.0], [25.9, 774.0], [26.0, 774.0], [26.1, 774.0], [26.2, 774.0], [26.3, 774.0], [26.4, 774.0], [26.5, 774.0], [26.6, 774.0], [26.7, 774.0], [26.8, 774.0], [26.9, 774.0], [27.0, 774.0], [27.1, 774.0], [27.2, 774.0], [27.3, 774.0], [27.4, 774.0], [27.5, 774.0], [27.6, 774.0], [27.7, 774.0], [27.8, 774.0], [27.9, 774.0], [28.0, 774.0], [28.1, 774.0], [28.2, 774.0], [28.3, 774.0], [28.4, 774.0], [28.5, 774.0], [28.6, 774.0], [28.7, 774.0], [28.8, 774.0], [28.9, 774.0], [29.0, 774.0], [29.1, 774.0], [29.2, 774.0], [29.3, 774.0], [29.4, 774.0], [29.5, 774.0], [29.6, 774.0], [29.7, 774.0], [29.8, 774.0], [29.9, 774.0], [30.0, 774.0], [30.1, 774.0], [30.2, 774.0], [30.3, 774.0], [30.4, 774.0], [30.5, 774.0], [30.6, 774.0], [30.7, 774.0], [30.8, 774.0], [30.9, 774.0], [31.0, 774.0], [31.1, 774.0], [31.2, 774.0], [31.3, 774.0], [31.4, 774.0], [31.5, 774.0], [31.6, 774.0], [31.7, 774.0], [31.8, 774.0], [31.9, 774.0], [32.0, 774.0], [32.1, 774.0], [32.2, 774.0], [32.3, 774.0], [32.4, 774.0], [32.5, 774.0], [32.6, 774.0], [32.7, 774.0], [32.8, 774.0], [32.9, 774.0], [33.0, 774.0], [33.1, 774.0], [33.2, 774.0], [33.3, 774.0], [33.4, 774.0], [33.5, 774.0], [33.6, 774.0], [33.7, 774.0], [33.8, 774.0], [33.9, 774.0], [34.0, 774.0], [34.1, 774.0], [34.2, 774.0], [34.3, 774.0], [34.4, 774.0], [34.5, 774.0], [34.6, 774.0], [34.7, 774.0], [34.8, 774.0], [34.9, 774.0], [35.0, 774.0], [35.1, 774.0], [35.2, 774.0], [35.3, 774.0], [35.4, 774.0], [35.5, 774.0], [35.6, 774.0], [35.7, 774.0], [35.8, 774.0], [35.9, 774.0], [36.0, 774.0], [36.1, 774.0], [36.2, 774.0], [36.3, 774.0], [36.4, 774.0], [36.5, 774.0], [36.6, 774.0], [36.7, 774.0], [36.8, 774.0], [36.9, 774.0], [37.0, 774.0], [37.1, 774.0], [37.2, 774.0], [37.3, 774.0], [37.4, 774.0], [37.5, 774.0], [37.6, 774.0], [37.7, 774.0], [37.8, 774.0], [37.9, 774.0], [38.0, 774.0], [38.1, 774.0], [38.2, 774.0], [38.3, 774.0], [38.4, 774.0], [38.5, 774.0], [38.6, 774.0], [38.7, 774.0], [38.8, 774.0], [38.9, 774.0], [39.0, 774.0], [39.1, 774.0], [39.2, 774.0], [39.3, 774.0], [39.4, 774.0], [39.5, 774.0], [39.6, 774.0], [39.7, 774.0], [39.8, 774.0], [39.9, 774.0], [40.0, 775.0], [40.1, 775.0], [40.2, 775.0], [40.3, 775.0], [40.4, 775.0], [40.5, 775.0], [40.6, 775.0], [40.7, 775.0], [40.8, 775.0], [40.9, 775.0], [41.0, 775.0], [41.1, 775.0], [41.2, 775.0], [41.3, 775.0], [41.4, 775.0], [41.5, 775.0], [41.6, 775.0], [41.7, 775.0], [41.8, 775.0], [41.9, 775.0], [42.0, 775.0], [42.1, 775.0], [42.2, 775.0], [42.3, 775.0], [42.4, 775.0], [42.5, 775.0], [42.6, 775.0], [42.7, 775.0], [42.8, 775.0], [42.9, 775.0], [43.0, 775.0], [43.1, 775.0], [43.2, 775.0], [43.3, 775.0], [43.4, 775.0], [43.5, 775.0], [43.6, 775.0], [43.7, 775.0], [43.8, 775.0], [43.9, 775.0], [44.0, 775.0], [44.1, 775.0], [44.2, 775.0], [44.3, 775.0], [44.4, 775.0], [44.5, 775.0], [44.6, 775.0], [44.7, 775.0], [44.8, 775.0], [44.9, 775.0], [45.0, 775.0], [45.1, 775.0], [45.2, 775.0], [45.3, 775.0], [45.4, 775.0], [45.5, 775.0], [45.6, 775.0], [45.7, 775.0], [45.8, 775.0], [45.9, 775.0], [46.0, 775.0], [46.1, 775.0], [46.2, 775.0], [46.3, 775.0], [46.4, 775.0], [46.5, 775.0], [46.6, 775.0], [46.7, 775.0], [46.8, 775.0], [46.9, 775.0], [47.0, 775.0], [47.1, 775.0], [47.2, 775.0], [47.3, 775.0], [47.4, 775.0], [47.5, 775.0], [47.6, 775.0], [47.7, 775.0], [47.8, 775.0], [47.9, 775.0], [48.0, 775.0], [48.1, 775.0], [48.2, 775.0], [48.3, 775.0], [48.4, 775.0], [48.5, 775.0], [48.6, 775.0], [48.7, 775.0], [48.8, 775.0], [48.9, 775.0], [49.0, 775.0], [49.1, 775.0], [49.2, 775.0], [49.3, 775.0], [49.4, 775.0], [49.5, 775.0], [49.6, 775.0], [49.7, 775.0], [49.8, 775.0], [49.9, 775.0], [50.0, 775.0], [50.1, 775.0], [50.2, 775.0], [50.3, 775.0], [50.4, 775.0], [50.5, 775.0], [50.6, 775.0], [50.7, 775.0], [50.8, 775.0], [50.9, 775.0], [51.0, 775.0], [51.1, 775.0], [51.2, 775.0], [51.3, 775.0], [51.4, 775.0], [51.5, 775.0], [51.6, 775.0], [51.7, 775.0], [51.8, 775.0], [51.9, 775.0], [52.0, 775.0], [52.1, 775.0], [52.2, 775.0], [52.3, 775.0], [52.4, 775.0], [52.5, 775.0], [52.6, 775.0], [52.7, 775.0], [52.8, 775.0], [52.9, 775.0], [53.0, 775.0], [53.1, 775.0], [53.2, 775.0], [53.3, 775.0], [53.4, 775.0], [53.5, 775.0], [53.6, 775.0], [53.7, 775.0], [53.8, 775.0], [53.9, 775.0], [54.0, 775.0], [54.1, 775.0], [54.2, 775.0], [54.3, 775.0], [54.4, 775.0], [54.5, 775.0], [54.6, 775.0], [54.7, 775.0], [54.8, 775.0], [54.9, 775.0], [55.0, 775.0], [55.1, 775.0], [55.2, 775.0], [55.3, 775.0], [55.4, 775.0], [55.5, 775.0], [55.6, 775.0], [55.7, 775.0], [55.8, 775.0], [55.9, 775.0], [56.0, 775.0], [56.1, 775.0], [56.2, 775.0], [56.3, 775.0], [56.4, 775.0], [56.5, 775.0], [56.6, 775.0], [56.7, 775.0], [56.8, 775.0], [56.9, 775.0], [57.0, 775.0], [57.1, 775.0], [57.2, 775.0], [57.3, 775.0], [57.4, 775.0], [57.5, 775.0], [57.6, 775.0], [57.7, 775.0], [57.8, 775.0], [57.9, 775.0], [58.0, 775.0], [58.1, 775.0], [58.2, 775.0], [58.3, 775.0], [58.4, 775.0], [58.5, 775.0], [58.6, 775.0], [58.7, 775.0], [58.8, 775.0], [58.9, 775.0], [59.0, 775.0], [59.1, 775.0], [59.2, 775.0], [59.3, 775.0], [59.4, 775.0], [59.5, 775.0], [59.6, 775.0], [59.7, 775.0], [59.8, 775.0], [59.9, 775.0], [60.0, 788.0], [60.1, 788.0], [60.2, 788.0], [60.3, 788.0], [60.4, 788.0], [60.5, 788.0], [60.6, 788.0], [60.7, 788.0], [60.8, 788.0], [60.9, 788.0], [61.0, 788.0], [61.1, 788.0], [61.2, 788.0], [61.3, 788.0], [61.4, 788.0], [61.5, 788.0], [61.6, 788.0], [61.7, 788.0], [61.8, 788.0], [61.9, 788.0], [62.0, 788.0], [62.1, 788.0], [62.2, 788.0], [62.3, 788.0], [62.4, 788.0], [62.5, 788.0], [62.6, 788.0], [62.7, 788.0], [62.8, 788.0], [62.9, 788.0], [63.0, 788.0], [63.1, 788.0], [63.2, 788.0], [63.3, 788.0], [63.4, 788.0], [63.5, 788.0], [63.6, 788.0], [63.7, 788.0], [63.8, 788.0], [63.9, 788.0], [64.0, 788.0], [64.1, 788.0], [64.2, 788.0], [64.3, 788.0], [64.4, 788.0], [64.5, 788.0], [64.6, 788.0], [64.7, 788.0], [64.8, 788.0], [64.9, 788.0], [65.0, 788.0], [65.1, 788.0], [65.2, 788.0], [65.3, 788.0], [65.4, 788.0], [65.5, 788.0], [65.6, 788.0], [65.7, 788.0], [65.8, 788.0], [65.9, 788.0], [66.0, 788.0], [66.1, 788.0], [66.2, 788.0], [66.3, 788.0], [66.4, 788.0], [66.5, 788.0], [66.6, 788.0], [66.7, 788.0], [66.8, 788.0], [66.9, 788.0], [67.0, 788.0], [67.1, 788.0], [67.2, 788.0], [67.3, 788.0], [67.4, 788.0], [67.5, 788.0], [67.6, 788.0], [67.7, 788.0], [67.8, 788.0], [67.9, 788.0], [68.0, 788.0], [68.1, 788.0], [68.2, 788.0], [68.3, 788.0], [68.4, 788.0], [68.5, 788.0], [68.6, 788.0], [68.7, 788.0], [68.8, 788.0], [68.9, 788.0], [69.0, 788.0], [69.1, 788.0], [69.2, 788.0], [69.3, 788.0], [69.4, 788.0], [69.5, 788.0], [69.6, 788.0], [69.7, 788.0], [69.8, 788.0], [69.9, 788.0], [70.0, 788.0], [70.1, 788.0], [70.2, 788.0], [70.3, 788.0], [70.4, 788.0], [70.5, 788.0], [70.6, 788.0], [70.7, 788.0], [70.8, 788.0], [70.9, 788.0], [71.0, 788.0], [71.1, 788.0], [71.2, 788.0], [71.3, 788.0], [71.4, 788.0], [71.5, 788.0], [71.6, 788.0], [71.7, 788.0], [71.8, 788.0], [71.9, 788.0], [72.0, 788.0], [72.1, 788.0], [72.2, 788.0], [72.3, 788.0], [72.4, 788.0], [72.5, 788.0], [72.6, 788.0], [72.7, 788.0], [72.8, 788.0], [72.9, 788.0], [73.0, 788.0], [73.1, 788.0], [73.2, 788.0], [73.3, 788.0], [73.4, 788.0], [73.5, 788.0], [73.6, 788.0], [73.7, 788.0], [73.8, 788.0], [73.9, 788.0], [74.0, 788.0], [74.1, 788.0], [74.2, 788.0], [74.3, 788.0], [74.4, 788.0], [74.5, 788.0], [74.6, 788.0], [74.7, 788.0], [74.8, 788.0], [74.9, 788.0], [75.0, 788.0], [75.1, 788.0], [75.2, 788.0], [75.3, 788.0], [75.4, 788.0], [75.5, 788.0], [75.6, 788.0], [75.7, 788.0], [75.8, 788.0], [75.9, 788.0], [76.0, 788.0], [76.1, 788.0], [76.2, 788.0], [76.3, 788.0], [76.4, 788.0], [76.5, 788.0], [76.6, 788.0], [76.7, 788.0], [76.8, 788.0], [76.9, 788.0], [77.0, 788.0], [77.1, 788.0], [77.2, 788.0], [77.3, 788.0], [77.4, 788.0], [77.5, 788.0], [77.6, 788.0], [77.7, 788.0], [77.8, 788.0], [77.9, 788.0], [78.0, 788.0], [78.1, 788.0], [78.2, 788.0], [78.3, 788.0], [78.4, 788.0], [78.5, 788.0], [78.6, 788.0], [78.7, 788.0], [78.8, 788.0], [78.9, 788.0], [79.0, 788.0], [79.1, 788.0], [79.2, 788.0], [79.3, 788.0], [79.4, 788.0], [79.5, 788.0], [79.6, 788.0], [79.7, 788.0], [79.8, 788.0], [79.9, 788.0], [80.0, 838.0], [80.1, 838.0], [80.2, 838.0], [80.3, 838.0], [80.4, 838.0], [80.5, 838.0], [80.6, 838.0], [80.7, 838.0], [80.8, 838.0], [80.9, 838.0], [81.0, 838.0], [81.1, 838.0], [81.2, 838.0], [81.3, 838.0], [81.4, 838.0], [81.5, 838.0], [81.6, 838.0], [81.7, 838.0], [81.8, 838.0], [81.9, 838.0], [82.0, 838.0], [82.1, 838.0], [82.2, 838.0], [82.3, 838.0], [82.4, 838.0], [82.5, 838.0], [82.6, 838.0], [82.7, 838.0], [82.8, 838.0], [82.9, 838.0], [83.0, 838.0], [83.1, 838.0], [83.2, 838.0], [83.3, 838.0], [83.4, 838.0], [83.5, 838.0], [83.6, 838.0], [83.7, 838.0], [83.8, 838.0], [83.9, 838.0], [84.0, 838.0], [84.1, 838.0], [84.2, 838.0], [84.3, 838.0], [84.4, 838.0], [84.5, 838.0], [84.6, 838.0], [84.7, 838.0], [84.8, 838.0], [84.9, 838.0], [85.0, 838.0], [85.1, 838.0], [85.2, 838.0], [85.3, 838.0], [85.4, 838.0], [85.5, 838.0], [85.6, 838.0], [85.7, 838.0], [85.8, 838.0], [85.9, 838.0], [86.0, 838.0], [86.1, 838.0], [86.2, 838.0], [86.3, 838.0], [86.4, 838.0], [86.5, 838.0], [86.6, 838.0], [86.7, 838.0], [86.8, 838.0], [86.9, 838.0], [87.0, 838.0], [87.1, 838.0], [87.2, 838.0], [87.3, 838.0], [87.4, 838.0], [87.5, 838.0], [87.6, 838.0], [87.7, 838.0], [87.8, 838.0], [87.9, 838.0], [88.0, 838.0], [88.1, 838.0], [88.2, 838.0], [88.3, 838.0], [88.4, 838.0], [88.5, 838.0], [88.6, 838.0], [88.7, 838.0], [88.8, 838.0], [88.9, 838.0], [89.0, 838.0], [89.1, 838.0], [89.2, 838.0], [89.3, 838.0], [89.4, 838.0], [89.5, 838.0], [89.6, 838.0], [89.7, 838.0], [89.8, 838.0], [89.9, 838.0], [90.0, 838.0], [90.1, 838.0], [90.2, 838.0], [90.3, 838.0], [90.4, 838.0], [90.5, 838.0], [90.6, 838.0], [90.7, 838.0], [90.8, 838.0], [90.9, 838.0], [91.0, 838.0], [91.1, 838.0], [91.2, 838.0], [91.3, 838.0], [91.4, 838.0], [91.5, 838.0], [91.6, 838.0], [91.7, 838.0], [91.8, 838.0], [91.9, 838.0], [92.0, 838.0], [92.1, 838.0], [92.2, 838.0], [92.3, 838.0], [92.4, 838.0], [92.5, 838.0], [92.6, 838.0], [92.7, 838.0], [92.8, 838.0], [92.9, 838.0], [93.0, 838.0], [93.1, 838.0], [93.2, 838.0], [93.3, 838.0], [93.4, 838.0], [93.5, 838.0], [93.6, 838.0], [93.7, 838.0], [93.8, 838.0], [93.9, 838.0], [94.0, 838.0], [94.1, 838.0], [94.2, 838.0], [94.3, 838.0], [94.4, 838.0], [94.5, 838.0], [94.6, 838.0], [94.7, 838.0], [94.8, 838.0], [94.9, 838.0], [95.0, 838.0], [95.1, 838.0], [95.2, 838.0], [95.3, 838.0], [95.4, 838.0], [95.5, 838.0], [95.6, 838.0], [95.7, 838.0], [95.8, 838.0], [95.9, 838.0], [96.0, 838.0], [96.1, 838.0], [96.2, 838.0], [96.3, 838.0], [96.4, 838.0], [96.5, 838.0], [96.6, 838.0], [96.7, 838.0], [96.8, 838.0], [96.9, 838.0], [97.0, 838.0], [97.1, 838.0], [97.2, 838.0], [97.3, 838.0], [97.4, 838.0], [97.5, 838.0], [97.6, 838.0], [97.7, 838.0], [97.8, 838.0], [97.9, 838.0], [98.0, 838.0], [98.1, 838.0], [98.2, 838.0], [98.3, 838.0], [98.4, 838.0], [98.5, 838.0], [98.6, 838.0], [98.7, 838.0], [98.8, 838.0], [98.9, 838.0], [99.0, 838.0], [99.1, 838.0], [99.2, 838.0], [99.3, 838.0], [99.4, 838.0], [99.5, 838.0], [99.6, 838.0], [99.7, 838.0], [99.8, 838.0], [99.9, 838.0]], "isOverall": false, "label": "GET /Spells/{id}", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 700.0, "maxY": 4.0, "series": [{"data": [[700.0, 4.0], [800.0, 1.0]], "isOverall": false, "label": "GET /Spells/{id}", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 800.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 5.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 5.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 5.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 2.0, "minX": 1.78354608E12, "maxY": 2.0, "series": [{"data": [[1.78354608E12, 2.0]], "isOverall": false, "label": "Usuarios", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78354608E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 769.0, "minX": 1.0, "maxY": 838.0, "series": [{"data": [[2.0, 779.0], [1.0, 769.0], [3.0, 838.0]], "isOverall": false, "label": "GET /Spells/{id}", "isController": false}, {"data": [[2.0, 788.8]], "isOverall": false, "label": "GET /Spells/{id}-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 3.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 16.833333333333332, "minX": 1.78354608E12, "maxY": 71.55, "series": [{"data": [[1.78354608E12, 71.55]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78354608E12, 16.833333333333332]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78354608E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 788.8, "minX": 1.78354608E12, "maxY": 788.8, "series": [{"data": [[1.78354608E12, 788.8]], "isOverall": false, "label": "GET /Spells/{id}", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78354608E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 788.2, "minX": 1.78354608E12, "maxY": 788.2, "series": [{"data": [[1.78354608E12, 788.2]], "isOverall": false, "label": "GET /Spells/{id}", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78354608E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 584.2, "minX": 1.78354608E12, "maxY": 584.2, "series": [{"data": [[1.78354608E12, 584.2]], "isOverall": false, "label": "GET /Spells/{id}", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78354608E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 769.0, "minX": 1.78354608E12, "maxY": 838.0, "series": [{"data": [[1.78354608E12, 838.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78354608E12, 769.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78354608E12, 838.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78354608E12, 838.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78354608E12, 775.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78354608E12, 838.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78354608E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 775.0, "minX": 1.0, "maxY": 803.5, "series": [{"data": [[1.0, 803.5], [3.0, 775.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 775.0, "minX": 1.0, "maxY": 802.0, "series": [{"data": [[1.0, 802.0], [3.0, 775.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.78354608E12, "maxY": 0.08333333333333333, "series": [{"data": [[1.78354608E12, 0.08333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78354608E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.78354608E12, "maxY": 0.08333333333333333, "series": [{"data": [[1.78354608E12, 0.08333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78354608E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.78354608E12, "maxY": 0.08333333333333333, "series": [{"data": [[1.78354608E12, 0.08333333333333333]], "isOverall": false, "label": "GET /Spells/{id}-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78354608E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.78354608E12, "maxY": 0.08333333333333333, "series": [{"data": [[1.78354608E12, 0.08333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78354608E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

