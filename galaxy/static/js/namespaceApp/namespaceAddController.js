/* (c) 2012-2018, Ansible by Red Hat
 *
 * This file is part of Ansible Galaxy
 *
 * Ansible Galaxy is free software: you can redistribute it and/or modify
 * it under the terms of the Apache License as published by
 * the Apache Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * Ansible Galaxy is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * Apache License for more details.
 *
 * You should have received a copy of the Apache License
 * along with Galaxy.  If not, see <http://www.apache.org/licenses/>.
 */

'use strict';

(function(angular) {

    var mod = angular.module('namespaceAddController', ['ngResource']);

    mod.controller('NamespaceAddCtrl', [
        '$scope',
        '$routeParams',
        '$location',
        'namespaceFormService',
        _NamespaceAddCtrl
    ]);

    function _NamespaceAddCtrl(
        $scope,
        $routeParams,
        $location,
        namespaceFormService
        ) {

        $scope.page_title = 'My Content';
        $scope.page_subtitle = 'Add Galaxy Namespace';

        $scope.version = GLOBAL_VERSION;
        $scope.github_auth = true;
        $scope.namespace  = {
            name: '',
            description: '',
            location: '',
            avatar_url: '',
            company: '',
            email: '',
            html_url: '',
            owners: [],
            provider_namespaces: []
        };

        namespaceFormService($scope, 'save');
    }

})(angular);
