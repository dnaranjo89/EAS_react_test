/**
 * EAS API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
* The RaffleResultValuePrize model module.
* @module model/RaffleResultValuePrize
* @version v1
*/
export default class RaffleResultValuePrize {
    /**
    * Constructs a new <code>RaffleResultValuePrize</code>.
    * @alias module:model/RaffleResultValuePrize
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>RaffleResultValuePrize</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RaffleResultValuePrize} obj Optional instance to populate.
    * @return {module:model/RaffleResultValuePrize} The populated <code>RaffleResultValuePrize</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RaffleResultValuePrize();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} id
    */
    id = undefined;
    /**
    * @member {String} name
    */
    name = undefined;








}


