/*var React    = require( 'react' ),
    ReactDOM = require( 'react-dom' ),
    Nested   = require( 'nestedtypes' ),
    $        = Nested.$;*/


import React from 'react';
import Nested from 'nestedtypes';
import createClass from './createClass';
import { Node, Element } from './propTypes';
import Link from './nested-link';

// extend React namespace
const NestedReact = Object.create( React );

// listenToProps, listenToState, model, attributes, Model
NestedReact.createClass = createClass;

// export hook to override base View class used...
//NestedReact.useView = function( View ){
//    NestedReact._BaseView = ComponentView.use( View );
//};

//NestedReact.useView( Nested.View );

// React component for attaching views
//NestedReact.subview = require( './view-element' );

//var propTypes  = require( './propTypes' );
NestedReact.Node = Node.value( null );
NestedReact.Element = Element.value( null );

// Extend react components to have backbone-style jquery accessors
//var Component     = React.createClass( { render : function(){} } ),
//    BaseComponent = Object.getPrototypeOf( Component.prototype );

//Object.defineProperties( BaseComponent, {
//    el  : { get : function(){ return ReactDOM.findDOMNode( this ); } },
//    $el : { get : function(){ return $( this.el ); } },
//    $   : { value : function( sel ){ return this.$el.find( sel ); } }
//} );

//NestedReact.Link = require( './nested-link' );
NestedReact.Link = Link;

export default NestedReact;
