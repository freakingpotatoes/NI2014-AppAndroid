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

function success(position) {
  var mapcanvas = document.createElement('div');
  mapcanvas.id = 'mapcontainer';
  mapcanvas.style.height = '400px';
  mapcanvas.style.width = '600px';
  
  var latitude = document.createElement('input');
  latitude.id = 'latitude';
  latitude.type = 'hidden'
  latitude.value = position.coords.latitude;
  
  var longitude = document.createElement('input');
  longitude.id = 'longitude';
  longitude.type = 'hidden'
  longitude.value = position.coords.longitude;
  alert(position.coords.longitude + ' ' + position.coords.latitude);
  document.querySelector('article').appendChild(mapcanvas);
  document.querySelector('form').appendChild(latitude);
  document.querySelector('form').appendChild(longitude);

  var coords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  
  var options = {
    zoom: 15,
    center: coords,
    mapTypeControl: false,
    navigationControlOptions: {
    	style: google.maps.NavigationControlStyle.SMALL
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("mapcontainer"), options);

  var marker = new google.maps.Marker({
      position: coords,
      map: map,
      title:"Vous êtes ici"
  });
}

function error(error) {
  alert(error.code + " " + error.message);
}

function onLoad() {
	document.addEventListener('deviceready', onDeviceReady, false);
}

function onDeviceReady() {
	var options = {
		enableHighAccuracy: true,
		timeout: 10000,
		maximumAge: 0
	};
	
	if (navigator.geolocation) {
	  navigator.geolocation.getCurrentPosition(success, error, options);
	} else {
	  alert('Vous ne pouvez pas être géolocalisé');
	}
}
 