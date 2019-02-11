/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/*document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    StatusBar.styleLightContent();
}*/ //removed for web app

var openWeb = function() {
    cordova.InAppBrowser.open('https://www.networkingwater.com', '_blank', 'location=yes');
}

var openDonate = function() {
    cordova.InAppBrowser.open('https://www.wateraid.org/donate', '_blank', 'location=yes');
}

var openQ = function() {
    cordova.InAppBrowser.open('https://imperial.eu.qualtrics.com/jfe/form/SV_0NUlFWS9PTRowxT','_blank','location=yes');
};

var openQPE = function() {
	cordova.InAppBrowser.open('https://imperial.eu.qualtrics.com/jfe/form/SV_2t6VHYLVT4DFMJn','_blank','location=yes');
}
