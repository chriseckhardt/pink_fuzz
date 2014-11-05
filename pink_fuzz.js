walk(document.body);


function walk(node)
{
  // shamelessly stolen from http://is.gd/mwZp7E
  var child, next;

  switch( node.nodeType ) {
    case 1: // Element
    case 9: // Document
    case 11: // Document fragment
      child = node.firstChild;
      while( child ) {
          next = child.nextSibling;
          walk(child);
          child = next;
      }
      break;

    case 3: // Text node
      fixText( node );
      break;
  }
}

function fixText( textNode )
{

  var euphemisms = [
    "a bag of dicks",
    "eels in my hovercraft",
    "manlettes",
    "two yoots",
    "self-hating, closeted homosexuals",
    "l33t hax0rz",
    "terrists",
    "turd-flinging thumb gorillas",
    "hamdburglers",
    "walrus farts",
    "whoa look at my hand dude it's all brrrr"
  ];
  
  var replacement = euphemisms[ Math.floor( Math.random() * euphemisms.length )];

  var v = textNode.nodeValue;
  v = v.replace( /Gamers?\s?Gate/gi, replacement );
  textNode.nodeValue = v;
}
