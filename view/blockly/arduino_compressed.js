// Do not edit this file; automatically generated by build.py.
'use strict';

var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.arrayIteratorImpl=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};$jscomp.makeIterator=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):$jscomp.arrayIterator(a)};Blockly.Arduino=new Blockly.Generator("Arduino");
Blockly.Arduino.addReservedWords("setup,loop,if,else,for,switch,case,while,do,break,continue,return,goto,define,include,HIGH,LOW,INPUT,OUTPUT,INPUT_PULLUP,true,false,interger, constants,floating,point,void,bookean,char,unsigned,byte,int,word,long,float,double,string,String,array,static, volatile,const,sizeof,pinMode,digitalWrite,digitalRead,analogReference,analogRead,analogWrite,tone,noTone,shiftOut,shitIn,pulseIn,millis,micros,delay,delayMicroseconds,min,max,abs,constrain,map,pow,sqrt,sin,cos,tan,randomSeed,random,lowByte,highByte,bitRead,bitWrite,bitSet,bitClear,ultraSonicDistance,parseDouble,setNeoPixelColor,bit,attachInterrupt,detachInterrupt,interrupts,noInterrupts","short",
"isBtnPressed");Blockly.Arduino.ORDER_ATOMIC=0;Blockly.Arduino.ORDER_UNARY_POSTFIX=1;Blockly.Arduino.ORDER_UNARY_PREFIX=2;Blockly.Arduino.ORDER_MULTIPLICATIVE=3;Blockly.Arduino.ORDER_ADDITIVE=4;Blockly.Arduino.ORDER_LOGICAL_NOT=4.4;Blockly.Arduino.ORDER_SHIFT=5;Blockly.Arduino.ORDER_MODULUS=5.3;Blockly.Arduino.ORDER_RELATIONAL=6;Blockly.Arduino.ORDER_EQUALITY=7;Blockly.Arduino.ORDER_BITWISE_AND=8;Blockly.Arduino.ORDER_BITWISE_XOR=9;Blockly.Arduino.ORDER_BITWISE_OR=10;
Blockly.Arduino.ORDER_LOGICAL_AND=11;Blockly.Arduino.ORDER_LOGICAL_OR=12;Blockly.Arduino.ORDER_CONDITIONAL=13;Blockly.Arduino.ORDER_ASSIGNMENT=14;Blockly.Arduino.ORDER_COMMA=18;Blockly.Arduino.ORDER_NONE=99;
Blockly.Arduino.init=function(a){Blockly.Arduino.libraries_=Object.create(null);Blockly.Arduino.setupCode_=Object.create(null);Blockly.Arduino.functionNames_=Object.create(null);Blockly.Arduino.variablesInitCode_="";Blockly.Arduino.variableDB_?Blockly.Arduino.variableDB_.reset():Blockly.Arduino.variableDB_=new Blockly.Names(Blockly.Arduino.RESERVED_WORDS_);Blockly.Arduino.variableDB_.setVariableMap(a.getVariableMap());var b=a.getVariablesOfType("Number"),c,d="";for(c=0;c<b.length;c+=1)d+="double "+
Blockly.Arduino.variableDB_.getName(b[c].getId(),Blockly.Variables.NAME_TYPE)+" = 0; \n\n";b=a.getVariablesOfType("String");for(c=0;c<b.length;c+=1)d+="String "+Blockly.Arduino.variableDB_.getName(b[c].getId(),Blockly.Variables.NAME_TYPE)+' = ""; \n\n';b=a.getVariablesOfType("Boolean");for(c=0;c<b.length;c+=1)d+="boolean "+Blockly.Arduino.variableDB_.getName(b[c].getId(),Blockly.Variables.NAME_TYPE)+" = false; \n\n";a=a.getVariablesOfType("Colour");for(c=0;c<a.length;c+=1)d+="RGB "+Blockly.Arduino.variableDB_.getName(a[c].getId(),
Blockly.Variables.NAME_TYPE)+" = {0, 0, 0}; \n\n";Blockly.Arduino.variablesInitCode_=d};
Blockly.Arduino.finish=function(a){var b="",c="",d;for(d in Blockly.Arduino.libraries_)b+=Blockly.Arduino.libraries_[d]+"\n";for(d in Blockly.Arduino.functionNames_)c+=Blockly.Arduino.functionNames_[d]+"\n";a=b+"\nint simple_loop_variable = 0; \nstruct RGB { \n\tint red;\n\tint green;\n\tint blue;\n};\n"+Blockly.Arduino.variablesInitCode_+"\n\n\n"+c+"\n"+a;delete Blockly.Arduino.definitions_;delete Blockly.Arduino.functionNames_;delete Blockly.Arduino.variablesInitCode_;delete Blockly.Arduino.libraries_;
Blockly.Arduino.variableDB_.reset();return a};Blockly.Arduino.scrubNakedValue=function(a){return a+";\n"};Blockly.Arduino.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/'/g,"\\'");return'"'+a+'"'};
Blockly.Arduino.scrub_=function(a,b){var c="";if(!a.outputConnection||!a.outputConnection.targetConnection){var d=a.getCommentText();(d=Blockly.utils.wrap(d,Blockly.Arduino.COMMENT_WRAP-3))&&(c=a.getProcedureDef?c+("/**\n"+Blockly.Arduino.prefixLines(d+"\n"," * ")+" */\n"):c+Blockly.Arduino.prefixLines(d+"\n","// "));for(var e=0;e<a.inputList.length;e++)a.inputList[e].type==Blockly.INPUT_VALUE&&(d=a.inputList[e].connection.targetBlock())&&(d=Blockly.Arduino.allNestedComments(d))&&(c+=Blockly.Arduino.prefixLines(d,
"// "))}e=a.nextConnection&&a.nextConnection.targetBlock();e=Blockly.Arduino.blockToCode(e);return c+b+e};
var profile={arduino_uno:{description:"Arduino standard-compatible board",digital:[["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8","8"],["9","9"],["10","10"],["11","11"],["12","12"],["13","13"],["A0","A0"],["A1","A1"],["A2","A2"],["A3","A3"],["A4","A4"],["A5","A5"]],pwm:[["3","3"],["5","5"],["6","6"],["9","9"],["10","10"],["11","11"],["A0","A0"],["A1","A1"],["A2","A2"],["A3","A3"],["A4","A4"],["A5","A5"]],analog:[["A0","A0"],["A1","A1"],["A2","A2"],["A3","A3"],["A4","A4"],["A5","A5"]],
serial_baud_rate:9600,parseKey:"_*_"}},selectedBoard=profile.arduino_uno;Blockly.Arduino.arduino_start={};Blockly.Arduino.arduino_start=function(a){var b=Blockly.Arduino.statementToCode(a,"setup");a=Blockly.Arduino.statementToCode(a,"loop");var c="",d;for(d in Blockly.Arduino.setupCode_)c+=Blockly.Arduino.setupCode_[d]||"";return"\n\n\nvoid setup() { \n"+c+b+"\n}\n\n\nvoid loop() { \n"+a+"\n}"};Blockly.Arduino.bluetooth={};Blockly.Arduino.bluetooth_setup=function(a){var b=a.getFieldValue("RX");a=a.getFieldValue("TX");Blockly.Arduino.libraries_.define_bluetooth="#include <SoftwareSerial.h>;\nSoftwareSerial blueToothSerial("+a+", "+b+"); \n";Blockly.Arduino.setupCode_.bluetooth_setup="\tblueToothSerial.begin("+selectedBoard.serial_baud_rate+"); \n\tdelay(1000); \n";return""};Blockly.Arduino.bt_receive_message=function(a){return["blueToothSerial.readStringUntil('|')",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.bt_has_message=function(a){return["(boolean)blueToothSerial.available()",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.bt_send_message=function(a){return"blueToothSerial.write("+Blockly.Arduino.valueToCode(a,"MESSAGE",Blockly.Arduino.ORDER_ATOMIC)+");\n"};Blockly.Arduino.colour={};function hexToRgb(a){return(a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a))?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:null}Blockly.Arduino.colour_picker=function(a){a=hexToRgb(a.getFieldValue("COLOUR"));return["{ "+a.r+", "+a.g+", "+a.b+"}",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.colour_random=function(a){return["{ random(0, 255), random(0, 255), random(0, 255)}",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.colour_rgb=function(a){var b=Blockly.Arduino.valueToCode(a,"RED",Blockly.Arduino.ORDER_ATOMIC),c=Blockly.Arduino.valueToCode(a,"GREEN",Blockly.Arduino.ORDER_ATOMIC);a=Blockly.Arduino.valueToCode(a,"BLUE",Blockly.Arduino.ORDER_ATOMIC);return["{ "+b+", "+c+", "+a+"}",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.debug={};var VARIABLE_TYPES=["Number","String","Boolean"];
Blockly.Arduino.debug=function(a){stepSerialBegin();Blockly.Arduino.functionNames_.double_to_string_debug=createDoubleToStringCFunc();for(var b=0;b<VARIABLE_TYPES.length;b+=1)Blockly.Arduino.functionNames_["print_array_"+VARIABLE_TYPES[b].replace(" ","")]=createPrintArrayFuncInC(VARIABLE_TYPES[b].replace(" ",""))+"\n\n";b='\n\nvoid debug(String blockNumber) { \n\t\tString stopDebug = ""; \n'+createDebugVariable();Blockly.Arduino.functionNames_.debug_function=b+'\t\tSerial.println("DEBUG_BLOCK_" + blockNumber + " ");\n\n\t\twhile (stopDebug != "s") { \n\t\t\tstopDebug = Serial.readStringUntil(\'|\'); \n\t\t\tdelay(1000);  \n\t\t}\n}\n';
return'debug("'+a.id+'"); \n'};
function createDebugVariable(){for(var a="",b=Blockly.mainWorkspace.getAllVariables(),c=0;c<b.length;c+=1)-1<VARIABLE_TYPES.indexOf(b[c].type)?(a+='\t\tSerial.println("**(|)'+b[c].name+"_|_"+b[c].type+'_|_" +',a="Number"===b[c].type?a+("double2string("+b[c].name+", 5));\n"):a+("String("+b[c].name+")); \n")):a+='\t\tSerial.println("**(|)'+b[c].name+"_|_An Array of "+b[c].type+"s size => "+getArrayVariableSize(b[c])+'_|_" +printArray'+b[c].type.replace(" ","")+"("+b[c].name+","+getArrayVariableSize(b[c])+
")); \n";return a}function getArrayVariableSize(a){var b=a.getId(),c="";"List String"===a.type?c="create_list_string_block":"List Number"===a.type?c="create_list_number_block":"List Boolean"===a.type?c="create_list_boolean_block":"List Colour"===a.type&&(c="create_list_colour_block");return(a=Blockly.mainWorkspace.getBlocksByType(c,!0).find(function(a){return a.getFieldValue("VAR")===b}))?a.getFieldValue("SIZE"):1}
function createPrintArrayFuncInC(a){var b='String printArrayREPLATEWITHTYPE(REPLATEWITHTYPE arr[], int sizeOfArray) {\t\tString returnValue = "[";\t\tfor (unsigned int i = 0; i < sizeOfArray; i += 1) {\n';b="number"==a.toLowerCase()?b+"\t\treturnValue +=  double2string(arr[i], 5);\n":"boolean"==a.toLowerCase()?b+'\t\treturnValue += arr[i] ? "TRUE" : "False"; \n':b+"\t\treturnValue +=  String(arr[i]);\n";"Number"===a?a="double":"Boolean"===a&&(a="boolean");return(b+'\t\tif (i < sizeOfArray -1) {\n\t\treturnValue += ", ";\n\t\t}\n\t\t}\n\t\t returnValue += "]";\n\t\treturn returnValue;\n\t}\n').replace(/REPLATEWITHTYPE/g,
a)}
function createDoubleToStringCFunc(){return" String double2string(double n, int ndec) {                         \n\t\t String r = \"\";                                                 \n\t\t int v = n;                                                     \n\t\t r += v;     // whole number part                               \n\t\t r += '.';   // decimal point                                   \n\t\t int i;                                                         \n\t\t for (i = 0; i < ndec; i++) {                                   \n\t\t     // iterate through each decimal digit for 0..ndec          \n\t\t     n -= v;                                                    \n\t\t     n *= 10;                                                   \n\t\t     v = n;                                                     \n\t\t     r += v;                                                    \n\t\t }                                                              \n\t\t                                                                \n\t\t return r;                                                      \n}"};Blockly.Arduino.debug_values={};Blockly.Arduino.debug_number=function(a){return""};Blockly.Arduino.debug_text=function(a){return""};Blockly.Arduino.debug_boolean=function(a){return""};Blockly.Arduino.inputoutput={};Blockly.Arduino.is_button_pressed=function(a){a=a.getFieldValue("PIN");Blockly.Arduino.setupCode_["btn_pin_"+a]="\tpinMode("+a+", INPUT_PULLUP); \n";return["(digitalRead("+a+") == LOW)",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.digital_read=function(a){a=a.getFieldValue("PIN");Blockly.Arduino.setupCode_["digital_read"+a]="\tpinMode("+a+", INPUT); \n";return["digitalRead("+a+")",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.digital_write=function(a){var b=a.getFieldValue("PIN");a="ON"==a.getFieldValue("STATE")?"HIGH":"LOW";return"digitalWrite("+b+", "+a+"); \n"};Blockly.Arduino.analog_read=function(a){return["(double)analogRead("+a.getFieldValue("PIN")+")",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.analog_write=function(a){var b=a.getFieldValue("PIN");a=Blockly.Arduino.valueToCode(a,"WRITE_VALUE",Blockly.Arduino.ORDER_ATOMIC);return"analogWrite("+b+", "+a+"); \n"};
Blockly.Arduino.ultra_sonic_sensor_distance=function(a){var b=a.getFieldValue("ECHO");a=a.getFieldValue("TRIG");Blockly.Arduino.setupCode_["setup_input_"+b]="\tpinMode("+b+", INPUT);\n";Blockly.Arduino.setupCode_["setup_input_"+a]="\tpinMode("+a+", OUTPUT);\n";Blockly.Arduino.functionNames_.pulse_in_function="double ultraSonicDistance(int trigPin, int echoPin) { \n\tdigitalWrite(trigPin, LOW);\n\tdelayMicroseconds(2); \n\tdigitalWrite(trigPin, HIGH); \n\tdelayMicroseconds(10); \n\tdigitalWrite(trigPin, LOW); \n\tlong microseconds = pulseIn(echoPin, HIGH); \n\treturn (double)(microseconds / 29 / 2); \n} \n\n";
return["ultraSonicDistance("+b+", "+a+")",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.ir_remote={};Blockly.Arduino.ir_remote_setup=function(a){a=a.getFieldValue("PIN")||"A1";Blockly.Arduino.libraries_.define_ir_remote="#include <IRremote.h>; \nIRrecv irReceiver("+a+");\ndecode_results result;\n";Blockly.Arduino.setupCode_.setup_ir_remote="\tirReceiver.enableIRIn(); \n";return""};Blockly.Arduino.ir_remote_has_code_receive=function(){return["irReceiver.decode(&result)",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.ir_remote_get_code=function(){return["String(result.value, HEX)",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.ir_remote_scan_again=function(){return"irReceiver.resume();\n"};Blockly.Arduino.lcd_screen={};
Blockly.Arduino.lcd_setup=function(a){var b=a.getFieldValue("SIZE");a=a.getFieldValue("MEMORY_TYPE").toUpperCase();Blockly.Arduino.libraries_.define_wire="#include <Wire.h>;\n";Blockly.Arduino.libraries_.define_liquid_crystal_i2c_big="#include <LiquidCrystal_I2C.h>;\n";Blockly.Arduino.libraries_.liquid_crystal_ic2_lcd_object="LiquidCrystal_I2C lcd("+a+","+("16 x 2"===b?2:4)+","+("16 x 2"===b?16:20)+");";Blockly.Arduino.setupCode_.liquid_crystal_ic2_lcd="\tlcd.init();\n\tlcd.backlight(); \n";return""};
Blockly.Arduino.lcd_scroll=function(a){return"RIGHT"===a.getFieldValue("DIR")?"lcd.scrollDisplayRight(); \n":"lcd.scrollDisplayLeft(); \n"};
Blockly.Arduino.lcd_screen_simple_print=function(a){function b(a,b){return'""'!==b?"lcd.setCursor(0, "+a+"); \nlcd.print("+b+"); \n":""}var c=Blockly.Arduino.valueToCode(a,"ROW_1",Blockly.Arduino.ORDER_ATOMIC),d=Blockly.Arduino.valueToCode(a,"ROW_2",Blockly.Arduino.ORDER_ATOMIC),e=Blockly.Arduino.valueToCode(a,"ROW_3",Blockly.Arduino.ORDER_ATOMIC),g=Blockly.Arduino.valueToCode(a,"ROW_4",Blockly.Arduino.ORDER_ATOMIC);a=Blockly.Arduino.valueToCode(a,"DELAY",Blockly.Arduino.ORDER_ATOMIC);return"lcd.clear(); \n"+
b(0,c)+b(1,d)+b(2,e)+b(3,g)+"delay("+a+"); \nlcd.clear(); \n"};Blockly.Arduino.lcd_backlight=function(a){return"ON"===a.getFieldValue("BACKLIGHT").toUpperCase()?"\tlcd.backlight();\n":"\tlcd.noBacklight();\n"};Blockly.Arduino.lcd_screen_clear=function(a){return"\tlcd.clear();\n"};
Blockly.Arduino.lcd_screen_print=function(a){var b=parseInt(Blockly.Arduino.valueToCode(a,"ROW",Blockly.Arduino.ORDER_ATOMIC)),c=parseInt(Blockly.Arduino.valueToCode(a,"COLUMN",Blockly.Arduino.ORDER_ATOMIC));a=Blockly.Arduino.valueToCode(a,"PRINT",Blockly.Arduino.ORDER_ATOMIC);return"\tlcd.setCursor("+(0<c?c-1:0)+", "+(0<b?b-1:0)+");\n\tlcd.print("+a+"); \n"};
Blockly.Arduino.lcd_screen_blink=function(a){var b=parseInt(Blockly.Arduino.valueToCode(a,"ROW",Blockly.Arduino.ORDER_ATOMIC)),c=parseInt(Blockly.Arduino.valueToCode(a,"COLUMN",Blockly.Arduino.ORDER_ATOMIC));a="BLINK"===a.getFieldValue("NAME").toUpperCase();return"\tlcd.setCursor("+(0<c?c-1:0)+", "+(0<b?b-1:0)+");\n"+(a?"\tlcd.blink();\n":"\tlcd.noBlink();\n")};Blockly.Arduino.led={};Blockly.Arduino.led_switch=function(a){var b=a.getFieldValue("PIN");a=a.getFieldValue("STATE");Blockly.Arduino.setupCode_["led_pin"+b]="\tpinMode("+b+", OUTPUT); \n";return"digitalWrite("+b+", "+("ON"===a?"HIGH":"LOW")+"); \n"};Blockly.Arduino.led_fade=function(a){var b=a.getFieldValue("PIN");a=Blockly.Arduino.valueToCode(a,"FADE",Blockly.Arduino.ORDER_ATOMIC);Blockly.Arduino.setupCode_["led_pin"+b]="\tpinMode("+b+", OUTPUT); \n";return"analogWrite("+b+", "+a||"1); \n"};
Blockly.Arduino.setup_led_color=function(a){var b=$jscomp.makeIterator(a.getFieldValue("WIRE").split("-"));a=b.next().value;var c=b.next().value;b=b.next().value;Blockly.Arduino.setupCode_["led_pin_"+a]="\tpinMode("+a+", OUTPUT); \n";Blockly.Arduino.setupCode_["led_pin_"+c]="\tpinMode("+c+", OUTPUT); \n";Blockly.Arduino.setupCode_["led_pin_"+b]="\tpinMode("+b+", OUTPUT); \n";Blockly.Arduino.libraries_.color_pin_blue="int BLUE_PIN = "+b+";\n";Blockly.Arduino.libraries_.color_pin_red="int RED_PIN = "+
a+";\n";Blockly.Arduino.libraries_.color_pin_green="int GREEN_PIN = "+c+";\n";Blockly.Arduino.functionNames_._setLedColor="void _setLedColor(RGB color) {\n\tanalogWrite(GREEN_PIN, color.green); \n\tanalogWrite(BLUE_PIN, color.blue); \n\tanalogWrite(RED_PIN, color.red); \n}\n";return""};Blockly.Arduino.set_color_led=function(a){return"_setLedColor("+Blockly.Arduino.valueToCode(a,"COLOUR",Blockly.Arduino.ORDER_ATOMIC)+");\n"};Blockly.Arduino.led_matrix={};function setupLedMatrix(){Blockly.Arduino.libraries_.define_led_matrix="#include <LedControlMS.h>;\n";Blockly.Arduino.libraries_.led_matrix_setup="LedControl lc = LedControl(12,11,10,1);\n";Blockly.Arduino.setupCode_.led_matrix="\tlc.shutdown(0,false); \n\tlc.setIntensity(0,8);\n\tlc.clearDisplay(0);\n"}
Blockly.Arduino.led_matrix_make_draw=function(a){setupLedMatrix();for(var b="\n\t//START CODE TO DRAW BLOCK "+a.id+"\n",c=1;8>=c;c+=1)for(var d=1;8>=d;d+=1){var e=a.getFieldValue(c+","+d).toLowerCase();b+="\tlc.setLed(0, "+c+", "+d+", "+e+");\n"}return b+="\n\t//FINISH CODE TO DRAW BLOCK "+a.id+"\n"};
Blockly.Arduino.led_matrix_turn_one_on_off=function(a){setupLedMatrix();var b=parseInt(Blockly.Arduino.valueToCode(a,"ROW",Blockly.Arduino.ORDER_ATOMIC)),c=parseInt(Blockly.Arduino.valueToCode(a,"COLUMN",Blockly.Arduino.ORDER_ATOMIC));c=0<c?c-1:0;b=0<b?b-1:0;a="ON"==a.getFieldValue("STATE")?"true":"false";return"\tlc.setLed(0, "+b+", "+c+", "+a+");\n"};Blockly.Arduino.list={};
var initListVariable=function(a,b){var c=a.getFieldValue("SIZE"),d=a.getFieldValue("VAR");d=Blockly.mainWorkspace.getVariableById(d);Blockly.Arduino.variablesInitCode_+=b+" "+d.name+"["+c+"];\n";return""},setListVariable=function(a){var b=Blockly.Arduino.valueToCode(a,"POSITION",Blockly.Arduino.ORDER_ATOMIC);b=0<parseInt(b)?b-1:0;var c=a.getFieldValue("VAR");c=Blockly.mainWorkspace.getVariableById(c);a=Blockly.Arduino.valueToCode(a,"VALUE",Blockly.Arduino.ORDER_ATOMIC);return c.name+"["+b+"] = "+
a+";\n"},getListVariable=function(a){var b=a.getFieldValue("VAR");b=Blockly.mainWorkspace.getVariableById(b);a=Blockly.Arduino.valueToCode(a,"POSITION",Blockly.Arduino.ORDER_ATOMIC);a=0<parseInt(a)?a-1:0;return[b.name+"["+a+"]",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.create_list_number_block=function(a){return initListVariable(a,"double")};Blockly.Arduino.create_list_string_block=function(a){return initListVariable(a,"String")};
Blockly.Arduino.create_list_boolean_block=function(a){return initListVariable(a,"boolean")};Blockly.Arduino.create_list_colour_block=function(a){return initListVariable(a,"RGB")};Blockly.Arduino.set_string_list_block=setListVariable;Blockly.Arduino.set_boolean_list_block=setListVariable;Blockly.Arduino.set_number_list_block=setListVariable;Blockly.Arduino.set_colour_list_block=setListVariable;Blockly.Arduino.get_string_from_list=getListVariable;Blockly.Arduino.get_boolean_from_list=getListVariable;
Blockly.Arduino.get_number_from_list=getListVariable;Blockly.Arduino.get_colour_from_list=getListVariable;Blockly.Arduino.logic={};Blockly.Arduino.logic_boolean=function(a){return["TRUE"==a.getFieldValue("BOOL")?"true":"false",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.logic_compare=function(a){var b={EQ:"==",NEQ:"!=",LT:"<",LTE:"<=",GT:">",GTE:">="}[a.getFieldValue("OP")],c="=="==b||"!="==b?Blockly.Arduino.ORDER_EQUALITY:Blockly.Arduino.ORDER_RELATIONAL,d=Blockly.Arduino.valueToCode(a,"A",c)||"0";a=Blockly.Arduino.valueToCode(a,"B",c)||"0";return["( "+d+" "+b+" "+a+")",c]};
Blockly.Arduino.logic_operation=function(a){var b="AND"==a.getFieldValue("OP")?"&&":"||",c="&&"==b?Blockly.Arduino.ORDER_LOGICAL_AND:Blockly.Arduino.ORDER_LOGICAL_OR,d=Blockly.Arduino.valueToCode(a,"A",c);a=Blockly.Arduino.valueToCode(a,"B",c);if(d||a){var e="&&"==b?"true":"false";d||(d=e);a||(a=e)}else a=d="false";return[d+" "+b+" "+a,c]};
Blockly.Arduino.control_if=function(a){var b=0,c="";do{var d=Blockly.Arduino.valueToCode(a,"IF"+b,Blockly.Arduino.ORDER_NONE)||"false";var e=Blockly.Arduino.statementToCode(a,"DO"+b);c+=(0<b?" else ":"")+"if ("+d+") {\n"+e+"}";++b}while(a.getInput("IF"+b));a.getInput("ELSE")&&(e=Blockly.Arduino.statementToCode(a,"ELSE"),c+=" else {\n"+e+"}");return c+"\n"};Blockly.Arduino.controls_ifelse=Blockly.Arduino.control_if;
Blockly.Arduino.logic_negate=function(a){var b=Blockly.Arduino.ORDER_UNARY_PREFIX;return["!"+(Blockly.Arduino.valueToCode(a,"BOOL",b)||"true"),b]};Blockly.Arduino.controls_repeat_ext=function(a){var b=Blockly.Arduino.valueToCode(a,"TIMES",Blockly.Arduino.ORDER_ASSIGNMENT)||"0",c=Blockly.Arduino.statementToCode(a,"DO");c=Blockly.Arduino.addLoopTrap(c,a.id);return"for (simple_loop_variable = 1; simple_loop_variable <= "+b+"; simple_loop_variable += 1) {\n"+c+"}\n"};
Blockly.Arduino.controls_for=function(a){var b=Blockly.mainWorkspace.getVariableById(a.getFieldValue("VAR")).name,c=Blockly.Arduino.statementToCode(a,"DO"),d=Blockly.Arduino.valueToCode(a,"FROM",Blockly.Arduino.ORDER_ASSIGNMENT)||"0",e=Blockly.Arduino.valueToCode(a,"TO",Blockly.Arduino.ORDER_ASSIGNMENT)||"0";a=Math.abs(parseInt(Blockly.Arduino.valueToCode(a,"BY",Blockly.Arduino.ORDER_ASSIGNMENT)));return"for ("+b+" = "+d+"; "+b+(d<e?" <= ":" >= ")+e+"; "+b+(d<e?" +":" -")+"= "+(0==a?1:a)+") {\n"+
c+"}\n"};Blockly.Arduino.controls_whileUntil=function(a){var b="UNTIL"==a.getFieldValue("MODE"),c=Blockly.Arduino.valueToCode(a,"BOOL",Blockly.Arduino.ORDER_LOGICAL_AND)||"false",d=Blockly.Arduino.statementToCode(a,"DO");d=Blockly.Arduino.addLoopTrap(d,a.id);b&&(c="!"+c);return"\twhile ("+c+") {\n"+d+"\t}\n"};
Blockly.Arduino.controls_flow_statements=function(a){switch(a.getFieldValue("FLOW")){case "BREAK":return"break;\n";case "CONTINUE":return"continue;\n"}throw Error("Unknown flow statement.");};Blockly.Arduino.math={};Blockly.Arduino.math_number=function(a){return[parseFloat(a.getFieldValue("NUM")),Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.math_arithmetic=function(a){var b={ADD:[" + ",Blockly.Arduino.ORDER_ASSIGNMENT],MINUS:[" - ",Blockly.Arduino.ORDER_ASSIGNMENT],MULTIPLY:[" * ",Blockly.Arduino.ORDER_ASSIGNMENT],DIVIDE:[" / ",Blockly.Arduino.ORDER_ASSIGNMENT],POWER:[null,Blockly.Arduino.ORDER_ASSIGNMENT]}[a.getFieldValue("OP")],c=b[0];b=b[1];var d=Blockly.Arduino.valueToCode(a,"A",b)||"0";a=Blockly.Arduino.valueToCode(a,"B",b)||"0";return c?[d+c+a,b]:["pow("+d+", "+a+")",Blockly.Arduino.ORDER_ASSIGNMENT]};
Blockly.Arduino.math_round=function(a){var b=a.getFieldValue("OP");a=Blockly.Arduino.valueToCode(a,"NUM",Blockly.Arduino.ORDER_NONE)||"0";switch(b){case "ROUND":b="(double)round("+a+")";break;case "ROUNDUP":b="(double)ceil("+a+")";break;case "ROUNDDOWN":b="(double)floor("+a+")";break;default:throw Error("No option for this operator: "+b);}return[b,Blockly.Arduino.ORDER_UNARY_PREFIX]};
Blockly.Arduino.math_modulo=function(a){var b=Blockly.Arduino.valueToCode(a,"DIVIDEND",Blockly.Arduino.ORDER_MODULUS)||"0";a=Blockly.Arduino.valueToCode(a,"DIVISOR",Blockly.Arduino.ORDER_MODULUS)||"0";return["(double)("+b+" % "+a+")",Blockly.Arduino.ORDER_MODULUS]};
Blockly.Arduino.math_random_int=function(a){var b=Blockly.Arduino.valueToCode(a,"FROM",Blockly.Arduino.ORDER_MODULUS)||0;a=Blockly.Arduino.valueToCode(a,"TO",Blockly.Arduino.ORDER_MODULUS)||1;return[b>a?"(double)rand("+a+", "+b+")":"(double)rand("+b+", "+a+")",Blockly.Arduino.ORDER_UNARY_POSTFIX]};
Blockly.Arduino.string_to_number=function(a){Blockly.Arduino.functionNames_.parseDouble="\ndouble parseDouble(String num) {\n\t // Use num.toDouble() instead of this.  Doing this because of arduino is compiling on a linux server.  \n\tchar str[40];\n\tnum.toCharArray(str, num.length() + 1);\n\treturn atof(str);\n}\n";return["parseDouble("+Blockly.Arduino.valueToCode(a,"VALUE",Blockly.Arduino.ORDER_ATOMIC)+")",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.message={};function stepSerialBegin(){Blockly.Arduino.setupCode_.serial_begin="\tSerial.begin("+selectedBoard.serial_baud_rate+"); \n"}Blockly.Arduino.receive_message=function(a){stepSerialBegin();return["Serial.readStringUntil('|')",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.has_message=function(a){stepSerialBegin();return["(Serial.available() > 0)",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.send_message=function(a){stepSerialBegin();return"\tSerial.println("+Blockly.Arduino.valueToCode(a,"MESSAGE",Blockly.Arduino.ORDER_ATOMIC)+");\n"};Blockly.Arduino.motor={};
Blockly.Arduino.move_motor=function(a){var b=Blockly.Arduino.valueToCode(a,"MOTOR",Blockly.Arduino.ORDER_ATOMIC),c=a.getFieldValue("DIRECTION").toUpperCase();a=Blockly.Arduino.valueToCode(a,"SPEED",Blockly.Arduino.ORDER_ATOMIC);Blockly.Arduino.libraries_.include_motor_library="#include <AFMotor.h>;\n";Blockly.Arduino.libraries_["include_motor_init_"+b]="AF_DCMotor motor_"+b+"("+b+");\n";return"motor_"+b+".setSpeed(0);\nmotor_"+(b+'.run("'+c+'");\nmotor_')+(b+".setSpeed("+a+");\n")};Blockly.Arduino.neo_pixel={};Blockly.Arduino.neo_pixel_setup=function(a){var b=a.getFieldValue("NUMBER_LEDS");a=a.getFieldValue("PIN");Blockly.Arduino.libraries_.define_neo_pixel="#include <Adafruit_NeoPixel.h>;\n#ifdef __AVR__ \n\t#include <avr/power.h>; \n#endif\n";Blockly.Arduino.libraries_.neo_pixel_setup="Adafruit_NeoPixel pixels = Adafruit_NeoPixel("+b+", "+a+", NEO_GRB + NEO_KHZ800);\n\n";Blockly.Arduino.setupCode_.neo_pixel="\tpixels.begin();\n";return""};
Blockly.Arduino.neo_pixel_set_color=function(a){Blockly.Arduino.functionNames_.set_color="\n\nvoid setNeoPixelColor(double pos, RGB color) {\n\tpos = pos <= 0 ? 0 : pos;\n\tpos = pos >= 1 ? pos - 1 : pos;\n\tpixels.setPixelColor((int)pos, color.red, color.green, color.blue);\n\tpixels.show();\n}\n";var b=Blockly.Arduino.valueToCode(a,"COLOR",Blockly.Arduino.ORDER_ATOMIC);return"\tsetNeoPixelColor("+Blockly.Arduino.valueToCode(a,"POSITION",Blockly.Arduino.ORDER_ATOMIC)+","+b+");\n"};Blockly.Arduino.procedures={};
Blockly.Arduino.procedures_defreturn=function(a){var b=Blockly.Arduino.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),c=Blockly.Arduino.statementToCode(a,"STACK"),d=a.getFieldValue("RETURN TYPE")||"void",e=Blockly.Arduino.valueToCode(a,"RETURN",Blockly.Arduino.ORDER_NONE)||"";e&&(e=Blockly.Arduino.INDENT+"return "+e+";\n");for(var g=[],f=0;f<a.argumentVarModels_.length;f++)g[f]=translateType(a.argumentVarModels_[f].type)+" "+a.argumentVarModels_[f].name;c=translateType(d)+
" "+b+"("+g.join(", ")+") {\n"+c+e+"}";c=Blockly.Arduino.scrub_(a,c);Blockly.Arduino.functionNames_["%"+b]=c;return null};function translateType(a){switch(a){case "Number":return"double";case "String":return"String";case "Boolean":return"boolean";case "void":return"void";default:throw Error("Invalid Parameter Type");}}Blockly.Arduino.procedures_defnoreturn=Blockly.Arduino.procedures_defreturn;
Blockly.Arduino.procedures_callreturn=function(a){for(var b=Blockly.Arduino.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),c=[],d=0;d<a.arguments_.length;d++)c[d]=Blockly.Arduino.valueToCode(a,"ARG"+d,Blockly.Arduino.ORDER_COMMA)||"null";return[b+"("+c.join(", ")+")",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.procedures_callnoreturn=function(a){for(var b=Blockly.Arduino.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),c=[],d=0;d<a.arguments_.length;d++)c[d]=Blockly.Arduino.valueToCode(a,"ARG"+d,Blockly.Arduino.ORDER_COMMA)||"null";return b+"("+c.join(", ")+");\n"};Blockly.Arduino.rfid={};function setupRFID(){Blockly.Arduino.libraries_.define_rfid='#include "RFIDRdm630.h"\n';Blockly.Arduino.libraries_.setup_rfid="RFIDRdm630 reader = RFIDRdm630(6,7);\n"}Blockly.Arduino.rfid_scan=function(){setupRFID();return["reader.isAvailable()",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.rfid_tag=function(){setupRFID();return["reader.getTag().getTag()",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.rfid_card=function(){setupRFID();return["reader.getTag().getCardNumber()",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.servo={};function servoSetup(a){Blockly.Arduino.libraries_.define_servo="#include <Servo.h>\n";Blockly.Arduino.libraries_["var_servo"+a]="Servo servo_"+a+";\n";Blockly.Arduino.setupCode_["setup_servo_"+a]="\tservo_"+a+".attach("+a+");\n"}Blockly.Arduino.servo_move=function(a){var b=a.getFieldValue("PIN");a=Blockly.Arduino.valueToCode(a,"DEGREE",Blockly.Arduino.ORDER_ATOMIC);servoSetup(b);return"servo_"+b+".write("+a+");\n"};
Blockly.Arduino.servo_read_degrees=function(a){a=a.getFieldValue("PIN");servoSetup(a);return["servo_"+a+".read()",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.servo_move_adafruit_tico=function(a){var b=a.getFieldValue("PIN");a=Blockly.Arduino.valueToCode(a,"DEGREE",Blockly.Arduino.ORDER_ATOMIC);Blockly.Arduino.libraries_.servo_move_adafruit_="#include <Adafruit_TiCoServo.h>\n";Blockly.Arduino.libraries_["var_servo_adafruit_"+b]="Adafruit_TiCoServo servo_adafruit"+b+";\n";Blockly.Arduino.setupCode_["setup_servo_adafruit"+b]="\tservo_adafruit"+b+".attach("+b+");\n";return"servo_adafruit"+b+".write("+a+");\n"};Blockly.Arduino.soil_sensor={};
Blockly.Arduino.soil_sensor_setup=function(a){stepSerialBegin();a=a.getFieldValue("PIN")||"A1";Blockly.Arduino.libraries_.define_water_sensor="#include <HygrometerSensor.h>";Blockly.Arduino.libraries_.water_sensor_setup="HygrometerSensor analog_rain_drop(HygrometerSensor::ANALOG, "+a+");\n";Blockly.Arduino.setupCode_.water_sensor_setup='\tif (!analog_rain_drop.setAnalogParameters(ANALOG_HUMIDITY_MIN, ANALOG_HUMIDITY_MAX, 800)) { \n\t\tSerial.print("Error while setting Analog parameters\\n");\n\t}\n\tint min, max, is_raining; \n\tanalog_rain_drop.getAnalogParameters(min, max, is_raining); \n\tSerial.print("Minimum analog value: "); \n\tSerial.print(min, DEC); \n\tSerial.print("\\nMaximum analog value: "); \n\tSerial.print(max, DEC); \n\tSerial.print("\\nValue used as switch from \'dry\' to \'is raining\': "); \n\tSerial.print(is_raining, DEC); \n';return""};
Blockly.Arduino.soil_humidity_value=function(){return["analog_rain_drop.readHumidityValue()",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.soil_humidity_percentage=function(){return["analog_rain_drop.readPercentageHumidity()",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.soil_is_raining=function(){return["analog_rain_drop.isHumid()",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.temp={};var pin;Blockly.Arduino.temp_setup=function(a){pin=a.getFieldValue("PIN")||"7";Blockly.Arduino.libraries_.temp_setup="#include <dht.h>;\n dht DHT;\n";return""};Blockly.Arduino.temp_read_temp_humidity=function(){return"DHT.read11("+pin+");\n"};Blockly.Arduino.temp_get_temp=function(){return["DHT.temperature",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.temp_get_humidity=function(){return["DHT.humidity",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.texts={};Blockly.Arduino.text=function(a){return[Blockly.Arduino.quote_(a.getFieldValue("TEXT")),Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.text.forceString_=function(a){return Blockly.Arduino.text.forceString_.strRegExp.test(a)?a:"String("+a+")"};Blockly.Arduino.text.forceString_.strRegExp=/^\s*'([^']|\\')*'\s*$/;
Blockly.Arduino.text_join=function(a){if(0==a.itemCount_)return['""',Blockly.Arduino.ORDER_ATOMIC];if(1==a.itemCount_)return a=Blockly.Arduino.valueToCode(a,"ADD0",Blockly.Arduino.ORDER_NONE)||'""',[Blockly.Arduino.text.forceString_(a),Blockly.Arduino.ORDER_ATOMIC];for(var b=[],c=0;c<a.itemCount_;c+=1){var d=Blockly.Arduino.valueToCode(a,"ADD"+c,Blockly.Arduino.ORDER_COMMA);0<d.length&&b.push(d)}return[b.join(" + "),Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.text_length=function(a){Blockly.Arduino.functionNames_.textLength="double textLength(String str) {\n\t return (double)str.length(); \n}\n";return["textLength("+Blockly.Arduino.valueToCode(a,"VALUE",Blockly.Arduino.ORDER_COMMA)+")",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.text_isEmpty=function(a){Blockly.Arduino.functionNames_.textLength="double textLength(String str) {\n\t return (double)str.length(); \n}\n";return["(textLength("+Blockly.Arduino.valueToCode(a,"VALUE",Blockly.Arduino.ORDER_COMMA)+") > 0)",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.number_to_string=function(a){Blockly.Arduino.functionNames_.double_to_string_debug=createDoubleToStringCFunc();var b=a.getFieldValue("PRECISION");return["double2string("+Blockly.Arduino.valueToCode(a,"NUMBER",Blockly.Arduino.ORDER_ATOMIC)+", "+b+")",Blockly.Arduino.ORDER_NONE]};
Blockly.Arduino.text_changeCase=function(a){Blockly.Arduino.functionNames_.upperCaseString="\nString upperCaseString(String str) {\n\tstr.toUpperCase(); \n\treturn str;\n}\n";Blockly.Arduino.functionNames_.lowerCaseString="\nString lowerCaseString(String str) {\n\tstr.toLowerCase(); \n\treturn str;\n}\n";var b=a.getFieldValue("CASE");a=Blockly.Arduino.valueToCode(a,"TEXT",Blockly.Arduino.ORDER_ATOMIC);return"UPPERCASE"==b?["upperCaseString("+a+")",Blockly.Arduino.ORDER_ATOMIC]:["lowerCaseString("+
a+")",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.parse_string_block=function(a){Blockly.Arduino.functionNames_.text_get_part_of_string='\nString getParseValue(String data, char separator, int index) { \n\tint found = 0;\tint strIndex[] = {0, -1}; \n\tint maxIndex = data.length()-1; \n\tfor(int i=0; i<=maxIndex && found<=index; i++){   \n\t    if(data.charAt(i)==separator || i==maxIndex){    \n\t        found++;                      \n\t        strIndex[0] = strIndex[1]+1;    \n\t        strIndex[1] = (i == maxIndex) ? i+1 : i;    \n\t    }                            \n\t}                     \n\treturn found>index ? data.substring(strIndex[0], strIndex[1]) : ""; \n}\n';var b=
Blockly.Arduino.valueToCode(a,"VALUE",Blockly.Arduino.ORDER_ATOMIC),c="'"+a.getFieldValue("DELIMITER")+"'";a=+Blockly.Arduino.valueToCode(a,"POSITION",Blockly.Arduino.ORDER_ATOMIC);a=Math.abs(parseInt(a));return["getParseValue("+b+", "+c+", "+(0<a?a-1:a)+")",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.time={};Blockly.Arduino.time_seconds=function(a){Blockly.Arduino.functionNames_.secondsArduinoBeenOn="double secondsArduinoBeenOn() {\n\treturn millis() / 1000;\n}\n";return["secondsArduinoBeenOn()",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.delay_block=function(a){a=Blockly.Arduino.valueToCode(a,"DELAY",Blockly.Arduino.ORDER_ATOMIC)||1;a=Math.ceil(1E3*Math.abs(a));return"delay("+a+");\n"};Blockly.Arduino.variables={};var setVariableFunction=function(a){var b=Blockly.Arduino.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE);a=Blockly.Arduino.valueToCode(a,"VALUE",Blockly.Arduino.ORDER_ATOMIC);return b+" = "+a+";\n"},getVariableFunction=function(a){return[Blockly.Arduino.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.variables_set_number=setVariableFunction;
Blockly.Arduino.variables_set_boolean=setVariableFunction;Blockly.Arduino.variables_set_string=setVariableFunction;Blockly.Arduino.variables_set_colour=setVariableFunction;Blockly.Arduino.variables_get_number=getVariableFunction;Blockly.Arduino.variables_get_boolean=getVariableFunction;Blockly.Arduino.variables_get_string=getVariableFunction;Blockly.Arduino.variables_get_colour=getVariableFunction;