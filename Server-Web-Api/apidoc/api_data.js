define({ "api": [
  {
    "type": "get",
    "url": "/check",
    "title": "",
    "name": "check",
    "group": "Authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/authenticate.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "get",
    "url": "/admin/:name/:password",
    "title": "Connect user",
    "name": "connect",
    "group": "Authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success of connection</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Connection message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Generated token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"success\": true,\n  \"message\": \"Enjoy your token!\",\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTI2MzE5NTMyfQ.S2bxQPO1Ku9HBL24G-mjixRPjfu5Dr0zIQca7If3BCQ\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>No user found for this username</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n\"Authentication failed. User not found.\"",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/authenticate.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "get",
    "url": "/admin/disconnect",
    "title": "Disconnect user",
    "name": "disconnect",
    "group": "Authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success of disconnection</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"disconnected\"",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/authenticate.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "get",
    "url": "/infos",
    "title": "",
    "name": "infos",
    "group": "Authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "identifiant",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "prenom",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "employe_type",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type_contrat",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_embauche",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adresse",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ville",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "cp",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "num_secu",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"id\":5,\"num_secu\":1934457897,\"nom\":\"Maxime\",\"prenom\":\"Desanges\",\"employe_type\":2,\n\"date_embauche\":\"2011-09-04T22:00:00.000Z\",\"type_contrat\":\"CDI\",\"adresse\":\"153 rue du Château\",\n\"ville\":\"Boulogne-Billancourt\",\"cp\":92100,\"identifiant\":\"mdesanges\",\"password\":\"admin2\",\n\"mail\":\"Desanges.Maxime@live.fr\"}]\"",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/authenticate.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "get",
    "url": "/infos",
    "title": "",
    "name": "infos",
    "group": "Authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"true\"",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/authenticate.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/agent-base/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_agent_base_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_agent_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/agent-base/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_agent_base_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_agent_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/ajv/dist/ajv.bundle.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_ajv_dist_ajv_bundle_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_ajv_dist_ajv_bundle_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/ajv/dist/ajv.bundle.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_ajv_dist_ajv_bundle_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_ajv_dist_ajv_bundle_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/ajv/dist/ajv.bundle.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_ajv_dist_ajv_bundle_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_ajv_dist_ajv_bundle_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/ajv/dist/ajv.bundle.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_ajv_dist_ajv_bundle_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_ajv_dist_ajv_bundle_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/ajv/dist/ajv.bundle.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_ajv_dist_ajv_bundle_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_ajv_dist_ajv_bundle_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/ajv/dist/ajv.bundle.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_ajv_dist_ajv_bundle_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_ajv_dist_ajv_bundle_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/ajv/dist/ajv.bundle.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_ajv_dist_ajv_bundle_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_ajv_dist_ajv_bundle_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/ajv/dist/ajv.bundle.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_ajv_dist_ajv_bundle_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_ajv_dist_ajv_bundle_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/ajv/dist/ajv.bundle.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_ajv_dist_ajv_bundle_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_ajv_dist_ajv_bundle_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/ajv/dist/ajv.bundle.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_ajv_dist_ajv_bundle_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_ajv_dist_ajv_bundle_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/ajv/dist/ajv.bundle.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_ajv_dist_ajv_bundle_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_ajv_dist_ajv_bundle_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/ajv/dist/ajv.bundle.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_ajv_dist_ajv_bundle_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_ajv_dist_ajv_bundle_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/ajv/dist/ajv.bundle.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_ajv_dist_ajv_bundle_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_ajv_dist_ajv_bundle_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/aws-sign2/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_aws_sign2_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/aws-sign2/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_aws_sign2_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/aws-sign2/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_aws_sign2_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/aws-sign2/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_aws_sign2_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/aws-sign2/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_aws_sign2_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/aws-sign2/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_aws_sign2_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/aws-sign2/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_aws_sign2_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/aws-sign2/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_aws_sign2_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/base/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_base_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/base/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_base_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/base/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_base_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/base/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_base_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/base/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_base_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/base/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_base_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/base/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_base_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/base/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_base_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/base/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_base_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/base/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_base_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/base/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_base_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/base/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_base_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/body-parser/lib/read.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_body_parser_lib_read_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_body_parser_lib_read_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/body-parser/lib/types/json.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_body_parser_lib_types_json_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_body_parser_lib_types_json_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/body-parser/lib/types/raw.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_body_parser_lib_types_raw_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_body_parser_lib_types_raw_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/body-parser/lib/types/text.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_body_parser_lib_types_text_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_body_parser_lib_types_text_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/body-parser/lib/types/text.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_body_parser_lib_types_text_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_body_parser_lib_types_text_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/body-parser/lib/types/urlencoded.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_body_parser_lib_types_urlencoded_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_body_parser_lib_types_urlencoded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/body-parser/lib/types/urlencoded.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_body_parser_lib_types_urlencoded_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_body_parser_lib_types_urlencoded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/body-parser/lib/types/urlencoded.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_body_parser_lib_types_urlencoded_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_body_parser_lib_types_urlencoded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/braces/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_braces_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/braces/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_braces_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/braces/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_braces_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/braces/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_braces_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/braces/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_braces_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/braces/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_braces_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/braces/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_braces_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/braces/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_braces_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/cache-base/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_cache_base_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/cache-base/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_cache_base_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/cache-base/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_cache_base_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/cache-base/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_cache_base_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/cache-base/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_cache_base_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/cache-base/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_cache_base_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/cache-base/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_cache_base_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/cache-base/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_cache_base_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/class-utils/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_class_utils_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/class-utils/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_class_utils_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/class-utils/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_class_utils_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/class-utils/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_class_utils_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/class-utils/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_class_utils_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/class-utils/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_class_utils_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/class-utils/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_class_utils_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/class-utils/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_class_utils_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/class-utils/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_class_utils_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/class-utils/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_class_utils_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/class-utils/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_class_utils_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/co/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_co_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_co_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/co/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_co_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_co_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/co/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_co_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_co_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/co/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_co_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_co_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/co/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_co_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_co_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/co/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_co_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_co_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/co/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_co_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_co_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/co/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_co_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_co_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/co/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_co_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_co_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/co/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_co_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_co_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/co/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_co_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_co_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/co/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_co_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_co_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/co/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_co_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_co_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/component-emitter/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_component_emitter_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_component_emitter_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/component-emitter/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_component_emitter_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_component_emitter_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/component-emitter/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_component_emitter_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_component_emitter_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/component-emitter/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_component_emitter_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_component_emitter_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/component-emitter/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_component_emitter_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_component_emitter_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/component-emitter/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_component_emitter_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_component_emitter_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/component-emitter/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_component_emitter_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_component_emitter_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/content-disposition/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_content_disposition_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/content-disposition/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_content_disposition_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/content-disposition/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_content_disposition_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/content-disposition/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_content_disposition_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/content-disposition/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_content_disposition_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/content-disposition/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_content_disposition_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/content-disposition/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_content_disposition_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/content-disposition/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_content_disposition_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/content-disposition/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_content_disposition_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/content-disposition/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_content_disposition_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_content_disposition_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/cookie-signature/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_cookie_signature_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_cookie_signature_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/cookie-signature/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_cookie_signature_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_cookie_signature_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/copy-descriptor/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_copy_descriptor_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_copy_descriptor_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/create-react-app/node_modules/commander/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_create_react_app_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/debug/src/node.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_debug_src_node_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/debug/src/node.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_debug_src_node_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/debug/src/node.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_debug_src_node_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_debug_src_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/delegates/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_delegates_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_delegates_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/delegates/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_delegates_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_delegates_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/delegates/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_delegates_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_delegates_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/delegates/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_delegates_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_delegates_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/delegates/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_delegates_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_delegates_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/delegates/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_delegates_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_delegates_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/etag/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_etag_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_etag_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/expand-brackets/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_expand_brackets_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_expand_brackets_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/expand-brackets/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_expand_brackets_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_expand_brackets_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/expand-brackets/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_expand_brackets_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_expand_brackets_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/expand-brackets/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_expand_brackets_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_expand_brackets_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/expand-brackets/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_expand_brackets_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_expand_brackets_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/expand-brackets/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_expand_brackets_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_expand_brackets_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express/lib/express.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_express_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_express_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express/lib/middleware/init.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_middleware_init_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_middleware_init_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express/lib/middleware/query.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_middleware_query_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_middleware_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express/lib/router/layer.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_router_layer_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_router_layer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express/lib/router/layer.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_router_layer_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_router_layer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express/lib/router/layer.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_router_layer_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_router_layer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express/lib/router/route.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_router_route_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_router_route_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express/lib/utils.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_utils_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express/lib/utils.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_utils_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express/lib/utils.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_utils_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express/lib/utils.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_utils_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express/lib/utils.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_utils_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express/lib/utils.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_utils_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express/lib/utils.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_utils_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express/lib/utils.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_utils_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express/lib/utils.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_utils_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express/lib/utils.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_utils_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express/lib/utils.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_utils_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express/lib/utils.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_utils_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express/lib/utils.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_utils_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express/lib/utils.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_utils_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express/node_modules/body-parser/lib/read.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_node_modules_body_parser_lib_read_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_node_modules_body_parser_lib_read_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express/node_modules/body-parser/lib/types/json.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_node_modules_body_parser_lib_types_json_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_node_modules_body_parser_lib_types_json_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express/node_modules/body-parser/lib/types/raw.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_node_modules_body_parser_lib_types_raw_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_node_modules_body_parser_lib_types_raw_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express/node_modules/body-parser/lib/types/text.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_node_modules_body_parser_lib_types_text_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_node_modules_body_parser_lib_types_text_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express/node_modules/body-parser/lib/types/text.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_node_modules_body_parser_lib_types_text_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_node_modules_body_parser_lib_types_text_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express/node_modules/body-parser/lib/types/urlencoded.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_node_modules_body_parser_lib_types_urlencoded_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_node_modules_body_parser_lib_types_urlencoded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express/node_modules/body-parser/lib/types/urlencoded.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_node_modules_body_parser_lib_types_urlencoded_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_node_modules_body_parser_lib_types_urlencoded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express/node_modules/body-parser/lib/types/urlencoded.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_node_modules_body_parser_lib_types_urlencoded_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_node_modules_body_parser_lib_types_urlencoded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express-session/session/cookie.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_session_session_cookie_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_session_session_cookie_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express-session/session/cookie.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_session_session_cookie_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_session_session_cookie_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express-session/session/cookie.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_session_session_cookie_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_session_session_cookie_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express-session/session/cookie.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_session_session_cookie_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_session_session_cookie_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express-session/session/cookie.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_session_session_cookie_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_session_session_cookie_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express-session/session/cookie.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_session_session_cookie_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_session_session_cookie_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express-session/session/cookie.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_session_session_cookie_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_session_session_cookie_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express-session/session/cookie.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_session_session_cookie_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_session_session_cookie_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express-session/session/session.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_session_session_session_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_session_session_session_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express-session/session/session.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_session_session_session_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_session_session_session_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express-session/session/session.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_session_session_session_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_session_session_session_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express-session/session/session.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_session_session_session_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_session_session_session_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express-session/session/session.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_session_session_session_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_session_session_session_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express-session/session/session.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_session_session_session_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_session_session_session_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express-session/session/session.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_session_session_session_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_session_session_session_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express-session/session/store.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_session_session_store_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_session_session_store_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express-session/session/store.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_session_session_store_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_session_session_store_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/express-session/session/store.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_session_session_store_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_express_session_session_store_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/extglob/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_extglob_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/extglob/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_extglob_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/extglob/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_extglob_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/extglob/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_extglob_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/extglob/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_extglob_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/extglob/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_extglob_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/extglob/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_extglob_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/extglob/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_extglob_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/fragment-cache/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_fragment_cache_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_fragment_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/fragment-cache/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_fragment_cache_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_fragment_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/fragment-cache/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_fragment_cache_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_fragment_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/fragment-cache/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_fragment_cache_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_fragment_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/fragment-cache/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_fragment_cache_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_fragment_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/http-proxy-agent/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_http_proxy_agent_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_http_proxy_agent_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/http-proxy-agent/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_http_proxy_agent_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_http_proxy_agent_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/http-proxy-agent/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_http_proxy_agent_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_http_proxy_agent_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/http-proxy-agent/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_http_proxy_agent_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_http_proxy_agent_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/http-proxy-agent/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_http_proxy_agent_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_http_proxy_agent_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/http-proxy-agent/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_http_proxy_agent_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_http_proxy_agent_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/http-proxy-agent/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_http_proxy_agent_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_http_proxy_agent_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/http-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/http-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/http-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/http-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/http-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/http-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/http-proxy-agent/node_modules/debug/src/node.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_http_proxy_agent_node_modules_debug_src_node_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_http_proxy_agent_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/http-proxy-agent/node_modules/debug/src/node.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_http_proxy_agent_node_modules_debug_src_node_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_http_proxy_agent_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/http-proxy-agent/node_modules/debug/src/node.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_http_proxy_agent_node_modules_debug_src_node_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_http_proxy_agent_node_modules_debug_src_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/https-proxy-agent/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_https_proxy_agent_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_https_proxy_agent_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/https-proxy-agent/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_https_proxy_agent_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_https_proxy_agent_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/https-proxy-agent/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_https_proxy_agent_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_https_proxy_agent_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/https-proxy-agent/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_https_proxy_agent_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_https_proxy_agent_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/https-proxy-agent/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_https_proxy_agent_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_https_proxy_agent_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/https-proxy-agent/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_https_proxy_agent_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_https_proxy_agent_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/https-proxy-agent/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_https_proxy_agent_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_https_proxy_agent_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/https-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/https-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/https-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/https-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/https-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/https-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/https-proxy-agent/node_modules/debug/src/node.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_https_proxy_agent_node_modules_debug_src_node_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_https_proxy_agent_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/https-proxy-agent/node_modules/debug/src/node.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_https_proxy_agent_node_modules_debug_src_node_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_https_proxy_agent_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/https-proxy-agent/node_modules/debug/src/node.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_https_proxy_agent_node_modules_debug_src_node_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_https_proxy_agent_node_modules_debug_src_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/humanize-ms/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_humanize_ms_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_humanize_ms_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/humanize-ms/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_humanize_ms_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_humanize_ms_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/humanize-ms/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_humanize_ms_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_humanize_ms_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/humanize-ms/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_humanize_ms_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_humanize_ms_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/isarray/build/build.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_isarray_build_build_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/isarray/build/build.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_isarray_build_build_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/isarray/build/build.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_isarray_build_build_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/isarray/build/build.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_isarray_build_build_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/isarray/build/build.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_isarray_build_build_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/isarray/build/build.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_isarray_build_build_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_isarray_build_build_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/jsonwebtoken/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_jsonwebtoken_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_jsonwebtoken_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/jsonwebtoken/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_jsonwebtoken_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_jsonwebtoken_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/jsonwebtoken/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_jsonwebtoken_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_jsonwebtoken_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/jsonwebtoken/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_jsonwebtoken_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_jsonwebtoken_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/make-fetch-happen/node_modules/socks-proxy-agent/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_make_fetch_happen_node_modules_socks_proxy_agent_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_make_fetch_happen_node_modules_socks_proxy_agent_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/make-fetch-happen/node_modules/socks-proxy-agent/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_make_fetch_happen_node_modules_socks_proxy_agent_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_make_fetch_happen_node_modules_socks_proxy_agent_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/map-cache/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_map_cache_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_map_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/map-cache/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_map_cache_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_map_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/map-cache/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_map_cache_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_map_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/map-cache/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_map_cache_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_map_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/map-cache/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_map_cache_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_map_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/media-typer/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_media_typer_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_media_typer_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/media-typer/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_media_typer_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_media_typer_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/media-typer/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_media_typer_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_media_typer_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/media-typer/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_media_typer_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_media_typer_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/media-typer/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_media_typer_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_media_typer_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/micromatch/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_micromatch_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_micromatch_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/micromatch/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_micromatch_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/micromatch/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_micromatch_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/micromatch/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_micromatch_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/micromatch/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_micromatch_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/micromatch/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_micromatch_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/micromatch/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_micromatch_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/micromatch/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_micromatch_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/micromatch/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_micromatch_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/micromatch/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_micromatch_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/micromatch/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_micromatch_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/micromatch/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_micromatch_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/micromatch/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_micromatch_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/micromatch/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_micromatch_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/micromatch/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_micromatch_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/micromatch/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_micromatch_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/micromatch/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_micromatch_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/micromatch/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_micromatch_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/micromatch/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_micromatch_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/nanomatch/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nanomatch_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nanomatch_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/nanomatch/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nanomatch_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/nanomatch/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nanomatch_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/nanomatch/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nanomatch_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/nanomatch/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nanomatch_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/nanomatch/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nanomatch_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/nanomatch/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nanomatch_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/nanomatch/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nanomatch_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/nanomatch/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nanomatch_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/nanomatch/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nanomatch_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/nanomatch/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nanomatch_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/nanomatch/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nanomatch_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/nanomatch/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nanomatch_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/nanomatch/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nanomatch_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/nanomatch/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nanomatch_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/nanomatch/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nanomatch_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/nanomatch/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nanomatch_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/nanomatch/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nanomatch_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/node-gyp/node_modules/ajv/dist/ajv.bundle.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_ajv_dist_ajv_bundle_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_ajv_dist_ajv_bundle_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/node-gyp/node_modules/ajv/dist/ajv.bundle.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_ajv_dist_ajv_bundle_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_ajv_dist_ajv_bundle_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/node-gyp/node_modules/ajv/dist/ajv.bundle.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_ajv_dist_ajv_bundle_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_ajv_dist_ajv_bundle_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/node-gyp/node_modules/ajv/dist/ajv.bundle.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_ajv_dist_ajv_bundle_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_ajv_dist_ajv_bundle_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/node-gyp/node_modules/ajv/dist/ajv.bundle.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_ajv_dist_ajv_bundle_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_ajv_dist_ajv_bundle_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/node-gyp/node_modules/ajv/dist/ajv.bundle.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_ajv_dist_ajv_bundle_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_ajv_dist_ajv_bundle_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/node-gyp/node_modules/ajv/dist/ajv.bundle.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_ajv_dist_ajv_bundle_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_ajv_dist_ajv_bundle_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/node-gyp/node_modules/ajv/dist/ajv.bundle.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_ajv_dist_ajv_bundle_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_ajv_dist_ajv_bundle_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/node-gyp/node_modules/ajv/dist/ajv.bundle.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_ajv_dist_ajv_bundle_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_ajv_dist_ajv_bundle_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/node-gyp/node_modules/ajv/dist/ajv.bundle.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_ajv_dist_ajv_bundle_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_ajv_dist_ajv_bundle_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/node-gyp/node_modules/ajv/dist/ajv.bundle.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_ajv_dist_ajv_bundle_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_ajv_dist_ajv_bundle_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/node-gyp/node_modules/ajv/dist/ajv.bundle.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_ajv_dist_ajv_bundle_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_ajv_dist_ajv_bundle_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/node-gyp/node_modules/ajv/dist/ajv.bundle.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_ajv_dist_ajv_bundle_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_ajv_dist_ajv_bundle_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/node-gyp/node_modules/aws-sign2/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_aws_sign2_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/node-gyp/node_modules/aws-sign2/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_aws_sign2_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/node-gyp/node_modules/aws-sign2/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_aws_sign2_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/node-gyp/node_modules/aws-sign2/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_aws_sign2_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/node-gyp/node_modules/aws-sign2/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_aws_sign2_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/node-gyp/node_modules/aws-sign2/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_aws_sign2_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/node-gyp/node_modules/aws-sign2/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_aws_sign2_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/node-gyp/node_modules/aws-sign2/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_aws_sign2_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_node_gyp_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/nodemon/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nodemon_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nodemon_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/nodemon/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nodemon_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nodemon_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/nodemon/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nodemon_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nodemon_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/nodemon/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nodemon_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nodemon_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/nodemon/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nodemon_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nodemon_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/nodemon/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nodemon_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nodemon_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/nodemon/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nodemon_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nodemon_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/nodemon/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nodemon_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nodemon_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/nodemon/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nodemon_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nodemon_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/nodemon/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nodemon_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nodemon_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/nodemon/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nodemon_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nodemon_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/nodemon/node_modules/debug/src/node.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nodemon_node_modules_debug_src_node_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nodemon_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/nodemon/node_modules/debug/src/node.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nodemon_node_modules_debug_src_node_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nodemon_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/nodemon/node_modules/debug/src/node.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nodemon_node_modules_debug_src_node_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_nodemon_node_modules_debug_src_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/agentkeepalive/node_modules/humanize-ms/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_agentkeepalive_node_modules_humanize_ms_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_agentkeepalive_node_modules_humanize_ms_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/agentkeepalive/node_modules/humanize-ms/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_agentkeepalive_node_modules_humanize_ms_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_agentkeepalive_node_modules_humanize_ms_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/agentkeepalive/node_modules/humanize-ms/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_agentkeepalive_node_modules_humanize_ms_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_agentkeepalive_node_modules_humanize_ms_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/agentkeepalive/node_modules/humanize-ms/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_agentkeepalive_node_modules_humanize_ms_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_agentkeepalive_node_modules_humanize_ms_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/http-proxy-agent/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/http-proxy-agent/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/agent-base/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_agent_base_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_agent_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/agent-base/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_agent_base_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_agent_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/node.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_node_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/node.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_node_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/node.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_node_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/https-proxy-agent/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/https-proxy-agent/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/agent-base/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_agent_base_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_agent_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/agent-base/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_agent_base_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_agent_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/node.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_node_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/node.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_node_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/node.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_node_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/socks-proxy-agent/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_socks_proxy_agent_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_socks_proxy_agent_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/socks-proxy-agent/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_socks_proxy_agent_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_socks_proxy_agent_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/socks-proxy-agent/node_modules/agent-base/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_socks_proxy_agent_node_modules_agent_base_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_socks_proxy_agent_node_modules_agent_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-profile/node_modules/make-fetch-happen/node_modules/socks-proxy-agent/node_modules/agent-base/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_socks_proxy_agent_node_modules_agent_base_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_profile_node_modules_make_fetch_happen_node_modules_socks_proxy_agent_node_modules_agent_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/agentkeepalive/node_modules/humanize-ms/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_agentkeepalive_node_modules_humanize_ms_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_agentkeepalive_node_modules_humanize_ms_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/agentkeepalive/node_modules/humanize-ms/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_agentkeepalive_node_modules_humanize_ms_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_agentkeepalive_node_modules_humanize_ms_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/agentkeepalive/node_modules/humanize-ms/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_agentkeepalive_node_modules_humanize_ms_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_agentkeepalive_node_modules_humanize_ms_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/agentkeepalive/node_modules/humanize-ms/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_agentkeepalive_node_modules_humanize_ms_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_agentkeepalive_node_modules_humanize_ms_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/http-proxy-agent/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/http-proxy-agent/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/agent-base/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_agent_base_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_agent_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/agent-base/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_agent_base_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_agent_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/node.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_node_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/node.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_node_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/node.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_node_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/https-proxy-agent/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/https-proxy-agent/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/agent-base/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_agent_base_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_agent_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/agent-base/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_agent_base_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_agent_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/node.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_node_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/node.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_node_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/node.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_node_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/socks-proxy-agent/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_socks_proxy_agent_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_socks_proxy_agent_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/socks-proxy-agent/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_socks_proxy_agent_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_socks_proxy_agent_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/socks-proxy-agent/node_modules/agent-base/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_socks_proxy_agent_node_modules_agent_base_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_socks_proxy_agent_node_modules_agent_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npm-registry-fetch/node_modules/make-fetch-happen/node_modules/socks-proxy-agent/node_modules/agent-base/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_socks_proxy_agent_node_modules_agent_base_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npm_registry_fetch_node_modules_make_fetch_happen_node_modules_socks_proxy_agent_node_modules_agent_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npmlog/node_modules/are-we-there-yet/node_modules/delegates/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npmlog_node_modules_are_we_there_yet_node_modules_delegates_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npmlog_node_modules_are_we_there_yet_node_modules_delegates_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npmlog/node_modules/are-we-there-yet/node_modules/delegates/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npmlog_node_modules_are_we_there_yet_node_modules_delegates_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npmlog_node_modules_are_we_there_yet_node_modules_delegates_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npmlog/node_modules/are-we-there-yet/node_modules/delegates/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npmlog_node_modules_are_we_there_yet_node_modules_delegates_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npmlog_node_modules_are_we_there_yet_node_modules_delegates_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npmlog/node_modules/are-we-there-yet/node_modules/delegates/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npmlog_node_modules_are_we_there_yet_node_modules_delegates_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npmlog_node_modules_are_we_there_yet_node_modules_delegates_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npmlog/node_modules/are-we-there-yet/node_modules/delegates/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npmlog_node_modules_are_we_there_yet_node_modules_delegates_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npmlog_node_modules_are_we_there_yet_node_modules_delegates_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/npmlog/node_modules/are-we-there-yet/node_modules/delegates/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npmlog_node_modules_are_we_there_yet_node_modules_delegates_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_npmlog_node_modules_are_we_there_yet_node_modules_delegates_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/agentkeepalive/node_modules/humanize-ms/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_agentkeepalive_node_modules_humanize_ms_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_agentkeepalive_node_modules_humanize_ms_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/agentkeepalive/node_modules/humanize-ms/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_agentkeepalive_node_modules_humanize_ms_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_agentkeepalive_node_modules_humanize_ms_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/agentkeepalive/node_modules/humanize-ms/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_agentkeepalive_node_modules_humanize_ms_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_agentkeepalive_node_modules_humanize_ms_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/agentkeepalive/node_modules/humanize-ms/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_agentkeepalive_node_modules_humanize_ms_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_agentkeepalive_node_modules_humanize_ms_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/http-proxy-agent/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/http-proxy-agent/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/agent-base/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_agent_base_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_agent_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/agent-base/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_agent_base_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_agent_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/node.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_node_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/node.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_node_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/http-proxy-agent/node_modules/debug/src/node.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_node_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_http_proxy_agent_node_modules_debug_src_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/https-proxy-agent/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/https-proxy-agent/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/agent-base/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_agent_base_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_agent_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/agent-base/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_agent_base_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_agent_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/node_modules/ms/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/debug.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/node.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_node_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/node.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_node_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/https-proxy-agent/node_modules/debug/src/node.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_node_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_https_proxy_agent_node_modules_debug_src_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/socks-proxy-agent/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_socks_proxy_agent_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_socks_proxy_agent_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/socks-proxy-agent/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_socks_proxy_agent_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_socks_proxy_agent_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/socks-proxy-agent/node_modules/agent-base/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_socks_proxy_agent_node_modules_agent_base_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_socks_proxy_agent_node_modules_agent_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/pacote/node_modules/make-fetch-happen/node_modules/socks-proxy-agent/node_modules/agent-base/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_socks_proxy_agent_node_modules_agent_base_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_pacote_node_modules_make_fetch_happen_node_modules_socks_proxy_agent_node_modules_agent_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/readable-stream/node_modules/util-deprecate/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_readable_stream_node_modules_util_deprecate_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_readable_stream_node_modules_util_deprecate_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/readable-stream/node_modules/util-deprecate/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_readable_stream_node_modules_util_deprecate_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_readable_stream_node_modules_util_deprecate_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/request/node_modules/aws-sign2/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_aws_sign2_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/request/node_modules/aws-sign2/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_aws_sign2_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/request/node_modules/aws-sign2/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_aws_sign2_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/request/node_modules/aws-sign2/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_aws_sign2_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/request/node_modules/aws-sign2/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_aws_sign2_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/request/node_modules/aws-sign2/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_aws_sign2_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/request/node_modules/aws-sign2/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_aws_sign2_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/request/node_modules/aws-sign2/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_aws_sign2_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/request/node_modules/har-validator/node_modules/ajv/dist/ajv.bundle.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_dist_ajv_bundle_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_dist_ajv_bundle_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/request/node_modules/har-validator/node_modules/ajv/dist/ajv.bundle.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_dist_ajv_bundle_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_dist_ajv_bundle_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/request/node_modules/har-validator/node_modules/ajv/dist/ajv.bundle.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_dist_ajv_bundle_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_dist_ajv_bundle_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/request/node_modules/har-validator/node_modules/ajv/dist/ajv.bundle.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_dist_ajv_bundle_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_dist_ajv_bundle_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/request/node_modules/har-validator/node_modules/ajv/dist/ajv.bundle.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_dist_ajv_bundle_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_dist_ajv_bundle_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/request/node_modules/har-validator/node_modules/ajv/dist/ajv.bundle.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_dist_ajv_bundle_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_dist_ajv_bundle_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/request/node_modules/har-validator/node_modules/ajv/dist/ajv.bundle.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_dist_ajv_bundle_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_dist_ajv_bundle_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/request/node_modules/har-validator/node_modules/ajv/dist/ajv.bundle.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_dist_ajv_bundle_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_dist_ajv_bundle_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/request/node_modules/har-validator/node_modules/ajv/dist/ajv.bundle.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_dist_ajv_bundle_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_dist_ajv_bundle_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/request/node_modules/har-validator/node_modules/ajv/dist/ajv.bundle.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_dist_ajv_bundle_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_dist_ajv_bundle_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/request/node_modules/har-validator/node_modules/ajv/dist/ajv.bundle.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_dist_ajv_bundle_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_dist_ajv_bundle_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/request/node_modules/har-validator/node_modules/ajv/dist/ajv.bundle.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_dist_ajv_bundle_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_dist_ajv_bundle_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/request/node_modules/har-validator/node_modules/ajv/dist/ajv.bundle.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_dist_ajv_bundle_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_dist_ajv_bundle_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/request/node_modules/har-validator/node_modules/ajv/node_modules/co/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_node_modules_co_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_node_modules_co_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/request/node_modules/har-validator/node_modules/ajv/node_modules/co/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_node_modules_co_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_node_modules_co_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/request/node_modules/har-validator/node_modules/ajv/node_modules/co/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_node_modules_co_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_node_modules_co_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/request/node_modules/har-validator/node_modules/ajv/node_modules/co/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_node_modules_co_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_node_modules_co_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/request/node_modules/har-validator/node_modules/ajv/node_modules/co/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_node_modules_co_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_node_modules_co_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/request/node_modules/har-validator/node_modules/ajv/node_modules/co/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_node_modules_co_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_node_modules_co_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/request/node_modules/har-validator/node_modules/ajv/node_modules/co/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_node_modules_co_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_node_modules_co_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/request/node_modules/har-validator/node_modules/ajv/node_modules/co/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_node_modules_co_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_node_modules_co_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/request/node_modules/har-validator/node_modules/ajv/node_modules/co/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_node_modules_co_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_node_modules_co_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/request/node_modules/har-validator/node_modules/ajv/node_modules/co/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_node_modules_co_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_node_modules_co_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/request/node_modules/har-validator/node_modules/ajv/node_modules/co/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_node_modules_co_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_node_modules_co_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/request/node_modules/har-validator/node_modules/ajv/node_modules/co/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_node_modules_co_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_node_modules_co_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/request/node_modules/har-validator/node_modules/ajv/node_modules/co/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_node_modules_co_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_request_node_modules_har_validator_node_modules_ajv_node_modules_co_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/sorted-union-stream/node_modules/from2/node_modules/readable-stream/node_modules/isarray/build/build.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_sorted_union_stream_node_modules_from2_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_sorted_union_stream_node_modules_from2_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/sorted-union-stream/node_modules/from2/node_modules/readable-stream/node_modules/isarray/build/build.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_sorted_union_stream_node_modules_from2_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_sorted_union_stream_node_modules_from2_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/sorted-union-stream/node_modules/from2/node_modules/readable-stream/node_modules/isarray/build/build.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_sorted_union_stream_node_modules_from2_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_sorted_union_stream_node_modules_from2_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/sorted-union-stream/node_modules/from2/node_modules/readable-stream/node_modules/isarray/build/build.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_sorted_union_stream_node_modules_from2_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_sorted_union_stream_node_modules_from2_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/sorted-union-stream/node_modules/from2/node_modules/readable-stream/node_modules/isarray/build/build.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_sorted_union_stream_node_modules_from2_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_sorted_union_stream_node_modules_from2_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/npm/node_modules/sorted-union-stream/node_modules/from2/node_modules/readable-stream/node_modules/isarray/build/build.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_sorted_union_stream_node_modules_from2_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_npm_node_modules_sorted_union_stream_node_modules_from2_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/object-copy/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_object_copy_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_object_copy_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/on-headers/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_on_headers_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_on_headers_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/path-to-regexp/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_path_to_regexp_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_path_to_regexp_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/regex-not/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_regex_not_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_regex_not_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/regex-not/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_regex_not_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_regex_not_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/repeat-string/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_repeat_string_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_repeat_string_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/send/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_send_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/send/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_send_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/send/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_send_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/send/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_send_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/send/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_send_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/send/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_send_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/send/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_send_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/send/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_send_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/send/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_send_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/send/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_send_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/send/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_send_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/send/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_send_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/send/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_send_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/send/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_send_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/send/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_send_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/send/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_send_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/send/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_send_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/send/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_send_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/send/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_send_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/send/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_send_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon/lib/compiler.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_lib_compiler_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon/lib/parser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon/lib/parser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon/lib/parser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon/lib/parser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon/lib/parser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon/lib/parser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon/lib/parser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon/lib/parser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon/lib/source-maps.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_lib_source_maps_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_lib_source_maps_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-node/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_node_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-node/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_node_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-node/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_node_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-node/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_node_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-node/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_node_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-node/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_node_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-node/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_node_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-node/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_node_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-node/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_node_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-node/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_node_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-node/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_node_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-node/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_node_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-node/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_node_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-node/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_node_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-node/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_node_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-node/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_node_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-node/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_node_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-node/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_node_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-node/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_node_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-util/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-util/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-util/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-util/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-util/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-util/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-util/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-util/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-util/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-util/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-util/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-util/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-util/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-util/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-util/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-util/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-util/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-util/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-util/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-util/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-util/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-util/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-util/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-util/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-util/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-util/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-util/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-util/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-util/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-util/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-util/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-util/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/snapdragon-util/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/socks-proxy-agent/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_socks_proxy_agent_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_socks_proxy_agent_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/socks-proxy-agent/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_socks_proxy_agent_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_socks_proxy_agent_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/static-extend/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_static_extend_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_static_extend_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/tmp/lib/tmp.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_tmp_lib_tmp_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_tmp_lib_tmp_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/tmp/lib/tmp.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_tmp_lib_tmp_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_tmp_lib_tmp_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/tmp/lib/tmp.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_tmp_lib_tmp_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_tmp_lib_tmp_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/tmp/lib/tmp.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_tmp_lib_tmp_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_tmp_lib_tmp_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/tmp/lib/tmp.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_tmp_lib_tmp_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_tmp_lib_tmp_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/tmp/lib/tmp.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_tmp_lib_tmp_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_tmp_lib_tmp_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/tmp/lib/tmp.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_tmp_lib_tmp_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_tmp_lib_tmp_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/tmp/lib/tmp.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_tmp_lib_tmp_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_tmp_lib_tmp_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/tmp/lib/tmp.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_tmp_lib_tmp_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_tmp_lib_tmp_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/tmp/lib/tmp.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_tmp_lib_tmp_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_tmp_lib_tmp_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/tmp/lib/tmp.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_tmp_lib_tmp_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_tmp_lib_tmp_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/tmp/lib/tmp.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_tmp_lib_tmp_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_tmp_lib_tmp_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/tmp/lib/tmp.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_tmp_lib_tmp_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_tmp_lib_tmp_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/tmp/lib/tmp.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_tmp_lib_tmp_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_tmp_lib_tmp_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/tmp/lib/tmp.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_tmp_lib_tmp_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_tmp_lib_tmp_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/to-regex/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_to_regex_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_to_regex_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/to-regex/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_to_regex_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_to_regex_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/use/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_use_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_use_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/use/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_use_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_use_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/util-deprecate/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_util_deprecate_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_util_deprecate_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/util-deprecate/browser.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_util_deprecate_browser_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_util_deprecate_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/node_modules/utils-merge/index.js",
    "group": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_utils_merge_index_js",
    "groupTitle": "C__Users_Greg_Desktop_ProjetAnnuel_Lab_Companion_Server_Web_Api_node_modules_utils_merge_index_js",
    "name": "Public"
  },
  {
    "type": "delete",
    "url": "/:id",
    "title": "delete an analysis",
    "name": "deleteById",
    "group": "analyse",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>analysis id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "boolean",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\ntrue",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\n\"parameters are not all integers\"",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/analyse.js",
    "groupTitle": "analyse"
  },
  {
    "type": "delete",
    "url": "/result/:id",
    "title": "delete an analysis result",
    "name": "deleteResult",
    "group": "analyse",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>analysis result id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "boolean",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\ntrue",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\n\"parameters are not all integers\"",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/analyse.js",
    "groupTitle": "analyse"
  },
  {
    "type": "get",
    "url": "/all",
    "title": "get all analysis",
    "name": "getAll",
    "group": "analyse",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the analyse</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the analyse</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "employe_id",
            "description": "<p>id of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "patient_id",
            "description": "<p>id of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "date_analyse",
            "description": "<p>date of the analyse creation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code_analyse",
            "description": "<p>code of the analyse</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"id\":5,\"description\":null,\"employe_id\":4,\"patient_id\":\"IZ500\",\"date_analyse\":\"2018-02-19T23:00:00.000Z\",\n\"code_analyse\":\"SG-MO-0002\"}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "analysis",
            "description": "<p>No menu analysis</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/analyse.js",
    "groupTitle": "analyse"
  },
  {
    "type": "get",
    "url": "/display/:id",
    "title": "get an analysis by id from view",
    "name": "getAnalyse",
    "group": "analyse",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the analyse</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the analyse</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "employe_id",
            "description": "<p>id of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "patient_id",
            "description": "<p>id of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "date_analyse",
            "description": "<p>date of the analyse creation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code_analyse",
            "description": "<p>code of the analyse</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"id\":5,\"description\":null,\"employe_id\":4,\"patient_id\":\"IZ500\",\"date_analyse\":\"2018-02-19T23:00:00.000Z\",\n\"code_analyse\":\"SG-MO-0002\"}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "analysis",
            "description": "<p>No analysis found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/analyse.js",
    "groupTitle": "analyse"
  },
  {
    "type": "get",
    "url": "/:code_analyse/resultats",
    "title": "get analysis results",
    "name": "getAnalyseResults",
    "group": "analyse",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the result</p>"
          },
          {
            "group": "Success 200",
            "type": "double",
            "optional": false,
            "field": "valeur",
            "description": "<p>value of the result</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "resultat_id",
            "description": "<p>id of the the result type</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "analyse_id",
            "description": "<p>id of the analysis</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\"id\":5,\"valeur\":\"1.21\",\"resultat_id\":3,\"analyse_id\":\"SG-MO-0001\"},\n{\"id\":6,\"valeur\":\"0.27\",\"resultat_id\":4,\"analyse_id\":\"SG-MO-0001\"},\n{\"id\":4,\"valeur\":\"0.56\",\"resultat_id\":2,\"analyse_id\":\"SG-MO-0001\"}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "analysis",
            "description": "<p>No analysis found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/analyse.js",
    "groupTitle": "analyse"
  },
  {
    "type": "get",
    "url": "/patient/liste/:id",
    "title": "get patient results",
    "name": "getAnalyseResults",
    "group": "analyse",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "double",
            "optional": false,
            "field": "date_analyse",
            "description": "<p>date of the analysis</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "resultat_id",
            "description": "<p>id of the the result type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"employe_id\":4,\"patient_id\":\"IZ500\"]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "analysis",
            "description": "<p>No analysis found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/analyse.js",
    "groupTitle": "analyse"
  },
  {
    "type": "get",
    "url": "/:code",
    "title": "get an analysis by it code",
    "name": "getByCode",
    "group": "analyse",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the analyse</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the analyse</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "employe_id",
            "description": "<p>id of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "patient_id",
            "description": "<p>id of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "date_analyse",
            "description": "<p>date of the analyse creation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code_analyse",
            "description": "<p>code of the analyse</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"id\":5,\"description\":null,\"employe_id\":4,\"patient_id\":\"IZ500\",\"date_analyse\":\"2018-02-19T23:00:00.000Z\",\n\"code_analyse\":\"SG-MO-0002\"}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "analysis",
            "description": "<p>No analysis found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/analyse.js",
    "groupTitle": "analyse"
  },
  {
    "type": "get",
    "url": "/employe/:employe_id",
    "title": "get an analysis by employee id",
    "name": "getByEmploye",
    "group": "analyse",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the analyse</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the analyse</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "employe_id",
            "description": "<p>id of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "patient_id",
            "description": "<p>id of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "date_analyse",
            "description": "<p>date of the analyse creation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code_analyse",
            "description": "<p>code of the analyse</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"id\":5,\"description\":null,\"employe_id\":4,\"patient_id\":\"IZ500\",\"date_analyse\":\"2018-02-19T23:00:00.000Z\",\n\"code_analyse\":\"SG-MO-0002\"}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "analysis",
            "description": "<p>No analysis found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/analyse.js",
    "groupTitle": "analyse"
  },
  {
    "type": "get",
    "url": "/id/:id",
    "title": "get an analysis by it id",
    "name": "getById",
    "group": "analyse",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the analyse</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the analyse</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "employe_id",
            "description": "<p>id of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "patient_id",
            "description": "<p>id of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "date_analyse",
            "description": "<p>date of the analyse creation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code_analyse",
            "description": "<p>code of the analyse</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"id\":5,\"description\":null,\"employe_id\":4,\"patient_id\":\"IZ500\",\"date_analyse\":\"2018-02-19T23:00:00.000Z\",\n\"code_analyse\":\"SG-MO-0002\"}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "analysis",
            "description": "<p>No analysis found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/analyse.js",
    "groupTitle": "analyse"
  },
  {
    "type": "post",
    "url": "/result/new",
    "title": "create an analyse result",
    "name": "new",
    "group": "analyse",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "valeur",
            "description": "<p>value of the result analysis</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "analyse_id",
            "description": "<p>id of the analysis</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "resultat_id",
            "description": "<p>date of the result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"true\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/analyse.js",
    "groupTitle": "analyse"
  },
  {
    "type": "post",
    "url": "/new",
    "title": "create a patient",
    "name": "new",
    "group": "analyse",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code_analyse",
            "description": "<p>code of the analysis</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "employe_id",
            "description": "<p>id of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "patient_id",
            "description": "<p>id of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "date_analyse",
            "description": "<p>date of the analysis</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"true\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/analyse.js",
    "groupTitle": "analyse"
  },
  {
    "type": "put",
    "url": "/:id",
    "title": "update an analysis",
    "name": "update",
    "group": "analyse",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the analyse</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the analyse</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "employe_id",
            "description": "<p>id of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "patient_id",
            "description": "<p>id of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "date_analyse",
            "description": "<p>date of the analyse creation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code_analyse",
            "description": "<p>code of the analyse</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[true]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/analyse.js",
    "groupTitle": "analyse"
  },
  {
    "type": "put",
    "url": "/result/:id",
    "title": "update an analyse result",
    "name": "updateResult",
    "group": "analyse",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "valeur",
            "description": "<p>value of the result analysis</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "analyse_id",
            "description": "<p>id of the analysis</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "resultat_id",
            "description": "<p>date of the result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[true]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/analyse.js",
    "groupTitle": "analyse"
  },
  {
    "type": "delete",
    "url": "/:id",
    "title": "delete an appointment",
    "name": "deleteById",
    "group": "appointment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>category id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "boolean",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\ntrue",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\n\"parameters are not all integers\"",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/visite.js",
    "groupTitle": "appointment"
  },
  {
    "type": "delete",
    "url": "/:id",
    "title": "delete a bill",
    "name": "deleteById",
    "group": "category",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"true\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/facture.js",
    "groupTitle": "category"
  },
  {
    "type": "delete",
    "url": "/:id",
    "title": "delete an category",
    "name": "deleteById",
    "group": "category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>category id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "boolean",
            "description": "<ul> <li></li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\ntrue",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\n\"parameters are not all integers\"",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/categorie.js",
    "groupTitle": "category"
  },
  {
    "type": "get",
    "url": "/all",
    "title": "get all analysis",
    "name": "getAll",
    "group": "category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": "<p>name of the category</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"id\":1,\"nom\":\"Hematocytologie\"},{\"id\":2,\"nom\":\"Biochimie Generale\"},{\"id\":3,\"nom\":\"Serologie\"},\n{\"id\":4,\"nom\":\"Marqueurs Tumoraux\"},{\"id\":5,\"nom\":\"Test\"},{\"id\":90,\"nom\":\"Hematocytologie\"},\n{\"id\":91,\"nom\":\"Biochimie Generale\"},{\"id\":92,\"nom\":\"Serologie\"},{\"id\":93,\"nom\":\"Marqueurs Tumoraux\"},\n{\"id\":94,\"nom\":\"Biochimie Generale\"},{\"id\":26,\"nom\":\"Hematocytologie\"},{\"id\":27,\"nom\":\"Biochimie Generale\"},\n{\"id\":28,\"nom\":\"Serologie\"},{\"id\":29,\"nom\":\"Marqueurs Tumoraux\"}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "category",
            "description": "<p>No category found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/categorie.js",
    "groupTitle": "category"
  },
  {
    "type": "get",
    "url": "/:id",
    "title": "get an category by its it",
    "name": "getById",
    "group": "category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": "<p>name of the category</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"id\":1,\"nom\":\"Hematocytologie\"}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "category",
            "description": "<p>No category found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/categorie.js",
    "groupTitle": "category"
  },
  {
    "type": "post",
    "url": "/new",
    "title": "create an category",
    "name": "new",
    "group": "category",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"true\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/categorie.js",
    "groupTitle": "category"
  },
  {
    "type": "put",
    "url": "/new",
    "title": "update an category",
    "name": "update",
    "group": "category",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"true\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/categorie.js",
    "groupTitle": "category"
  },
  {
    "type": "delete",
    "url": "/:id",
    "title": "delete an employee",
    "name": "deleteById",
    "group": "employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>employee id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "boolean",
            "description": "<ul> <li></li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\ntrue",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\n\"parameters are not all integers\"",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/employe.js",
    "groupTitle": "employee"
  },
  {
    "type": "get",
    "url": "/all",
    "title": "get all employees",
    "name": "getAll",
    "group": "employee",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "num_secu",
            "description": "<p>secu number of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": "<p>name of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "prenom",
            "description": "<p>firstname of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "employe-type",
            "description": "<p>type of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_embauche",
            "description": "<p>employmentDate of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type_contrat",
            "description": "<p>contract type of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adresse",
            "description": "<p>adress of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ville",
            "description": "<p>city of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "cp",
            "description": "<p>postal code of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "identifiant",
            "description": "<p>username of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>email of the employee</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"id\":5,\"num_secu\":1934457897,\"nom\":\"Maxime\",\"prenom\":\"Desanges\",\"employe_type\":2,\n\"date_embauche\":\"2011-09-04T22:00:00.000Z\",\"type_contrat\":\"CDI\",\n\"adresse\":\"153 rue du Château\",\"ville\":\"Boulogne-Billancourt\",\"cp\":92100,\"identifiant\":\"mdesanges\",\n\"password\":\"admin2\",\"mail\":\"Desanges.Maxime@live.fr\"},\n{\"id\":6,\"num_secu\":1934456297,\"nom\":\"Jeanne\",\"prenom\":\"Quetoya\",\"employe_type\":2,\n\"date_embauche\":\"2007-09-04T22:00:00.000Z\",\"type_contrat\":\"CDI\",\"adresse\":\"55 rue du fromage\",\n\"ville\":\"Rouen\",\"cp\":76000,\"identifiant\":\"jquetoya\",\"password\":\"admin3\",\"mail\":\"Quetoya.Jeanne@live.fr\"},\n{\"id\":13,\"num_secu\":1958288520,\"nom\":\"Moineau\",\"prenom\":\"Daniel\",\"employe_type\":1,\n\"date_embauche\":\"2012-01-13T23:00:00.000Z\",\"type_contrat\":\"CDI\",\"adresse\":\"5 allée des Murs\",\n\"ville\":\"Paris\",\"cp\":75004,\"identifiant\":\"dmoineau\",\"password\":\"admin1\",\"mail\":\"dmoineau@gmail.com\"},\n{\"id\":4,\"num_secu\":1934565297,\"nom\":\"André\",\"prenom\":\"Petit\",\"employe_type\":1,\n\"date_embauche\":\"2013-02-09T23:00:00.000Z\",\"type_contrat\":\"CDI\",\"adresse\":\"12 avenue du bois\",\n\"ville\":\"Angerville-Bailleul\",\"cp\":76012,\"identifiant\":\"apetit\",\"password\":\"admin1\",\"mail\":\"petit.andre@live.fr\"}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "employee",
            "description": "<p>No employee found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/employe.js",
    "groupTitle": "employee"
  },
  {
    "type": "get",
    "url": "/id/:id",
    "title": "get a patient by its id",
    "name": "getById",
    "group": "employee",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "num_secu",
            "description": "<p>secu number of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": "<p>name of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "prenom",
            "description": "<p>firstname of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "employe-type",
            "description": "<p>type of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_embauche",
            "description": "<p>employmentDate of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type_contrat",
            "description": "<p>contract type of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adresse",
            "description": "<p>adress of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ville",
            "description": "<p>city of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "cp",
            "description": "<p>postal code of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "identifiant",
            "description": "<p>username of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>email of the employee</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"id\":4,\"num_secu\":1934565297,\"nom\":\"André\",\"prenom\":\"Petit\",\"employe_type\":1,\n\"date_embauche\":\"2013-02-09T23:00:00.000Z\",\"type_contrat\":\"CDI\",\"adresse\":\"12 avenue du bois\",\n\"ville\":\"Angerville-Bailleul\",\"cp\":76012,\"identifiant\":\"apetit\",\"password\":\"admin1\",\"mail\":\"petit.andre@live.fr\"}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "employee",
            "description": "<p>No employee found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/employe.js",
    "groupTitle": "employee"
  },
  {
    "type": "get",
    "url": "/:identifiant",
    "title": "get an employee by its username",
    "name": "getByIdentifiant",
    "group": "employee",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "num_secu",
            "description": "<p>secu number of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": "<p>name of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "prenom",
            "description": "<p>firstname of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "employe-type",
            "description": "<p>type of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_embauche",
            "description": "<p>employmentDate of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type_contrat",
            "description": "<p>contract type of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adresse",
            "description": "<p>adress of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ville",
            "description": "<p>city of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "cp",
            "description": "<p>postal code of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "identifiant",
            "description": "<p>username of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>email of the employee</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"id\":4,\"num_secu\":1934565297,\"nom\":\"André\",\"prenom\":\"Petit\",\"employe_type\":1,\n\"date_embauche\":\"2013-02-09T23:00:00.000Z\",\"type_contrat\":\"CDI\",\"adresse\":\"12 avenue du bois\",\n\"ville\":\"Angerville-Bailleul\",\"cp\":76012,\"identifiant\":\"apetit\",\"password\":\"admin1\",\"mail\":\"petit.andre@live.fr\"}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "employee",
            "description": "<p>No employee found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/employe.js",
    "groupTitle": "employee"
  },
  {
    "type": "get",
    "url": "/name/:nom",
    "title": "get a patient by its name",
    "name": "getByName",
    "group": "employee",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "num_secu",
            "description": "<p>secu number of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": "<p>name of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "prenom",
            "description": "<p>firstname of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "employe-type",
            "description": "<p>type of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_embauche",
            "description": "<p>employmentDate of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type_contrat",
            "description": "<p>contract type of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adresse",
            "description": "<p>adress of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ville",
            "description": "<p>city of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "cp",
            "description": "<p>postal code of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "identifiant",
            "description": "<p>username of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>email of the employee</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"id\":4,\"num_secu\":1934565297,\"nom\":\"André\",\"prenom\":\"Petit\",\"employe_type\":1,\n\"date_embauche\":\"2013-02-09T23:00:00.000Z\",\"type_contrat\":\"CDI\",\"adresse\":\"12 avenue du bois\",\n\"ville\":\"Angerville-Bailleul\",\"cp\":76012,\"identifiant\":\"apetit\",\"password\":\"admin1\",\"mail\":\"petit.andre@live.fr\"}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "employee",
            "description": "<p>No employee found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/employe.js",
    "groupTitle": "employee"
  },
  {
    "type": "get",
    "url": "/doctors",
    "title": "get doctors type employee",
    "name": "getDoctors",
    "group": "employee",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "num_secu",
            "description": "<p>secu number of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": "<p>name of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "prenom",
            "description": "<p>firstname of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "employe-type",
            "description": "<p>type of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_embauche",
            "description": "<p>employmentDate of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type_contrat",
            "description": "<p>contract type of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adresse",
            "description": "<p>adress of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ville",
            "description": "<p>city of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "cp",
            "description": "<p>postal code of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "identifiant",
            "description": "<p>username of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>email of the employee</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"id\":5,\"num_secu\":1934457897,\"nom\":\"Maxime\",\"prenom\":\"Desanges\",\"employe_type\":2,\n\"date_embauche\":\"2011-09-04T22:00:00.000Z\",\"type_contrat\":\"CDI\",\n\"adresse\":\"153 rue du Château\",\"ville\":\"Boulogne-Billancourt\",\"cp\":92100,\"identifiant\":\"mdesanges\",\n\"password\":\"admin2\",\"mail\":\"Desanges.Maxime@live.fr\"},\n{\"id\":13,\"num_secu\":1958288520,\"nom\":\"Moineau\",\"prenom\":\"Daniel\",\"employe_type\":1,\n\"date_embauche\":\"2012-01-13T23:00:00.000Z\",\"type_contrat\":\"CDI\",\"adresse\":\"5 allée des Murs\",\n\"ville\":\"Paris\",\"cp\":75004,\"identifiant\":\"dmoineau\",\"password\":\"admin1\",\"mail\":\"dmoineau@gmail.com\"},\n{\"id\":4,\"num_secu\":1934565297,\"nom\":\"André\",\"prenom\":\"Petit\",\"employe_type\":1,\n\"date_embauche\":\"2013-02-09T23:00:00.000Z\",\"type_contrat\":\"CDI\",\"adresse\":\"12 avenue du bois\",\n\"ville\":\"Angerville-Bailleul\",\"cp\":76012,\"identifiant\":\"apetit\",\"password\":\"admin1\",\"mail\":\"petit.andre@live.fr\"}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "employee",
            "description": "<p>No employee found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/employe.js",
    "groupTitle": "employee"
  },
  {
    "type": "post",
    "url": "/new",
    "title": "create a patient",
    "name": "new",
    "group": "employee",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": "<p>name of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "prenom",
            "description": "<p>name of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "employe-type",
            "description": "<p>type of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_embauche",
            "description": "<p>employmentDate of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type_contrat",
            "description": "<p>contract type of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adresse",
            "description": "<p>adress of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ville",
            "description": "<p>city of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "cp",
            "description": "<p>postal code of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "identifiant",
            "description": "<p>username of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>email of the employee</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"true\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/employe.js",
    "groupTitle": "employee"
  },
  {
    "type": "put",
    "url": "/:id",
    "title": "update a patient",
    "name": "update",
    "group": "employee",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "num_secu",
            "description": "<p>secu number of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": "<p>id of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "prenom",
            "description": "<p>id of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "employe-type",
            "description": "<p>type of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_embauche",
            "description": "<p>employmentDate of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type_contrat",
            "description": "<p>contract type of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adresse",
            "description": "<p>adress of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ville",
            "description": "<p>city of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "cp",
            "description": "<p>postal code of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "identifiant",
            "description": "<p>username of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>email of the employee</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"true\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/employe.js",
    "groupTitle": "employee"
  },
  {
    "type": "get",
    "url": "/all",
    "title": "get all bill",
    "name": "getAll",
    "group": "facture",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the bill</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "montant",
            "description": "<p>amount of the bill</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_creation",
            "description": "<p>creation date of the bill</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "boolean",
            "description": "<p>acquitte status of the bill</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adresse_facturation",
            "description": "<p>facturation address of the bill</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "visite_id",
            "description": "<p>id of the appointment</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "patient_id",
            "description": "<p>id of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "analyse_id",
            "description": "<p>id of the analysis</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"id\":2,\"montant\":\"80\",\"date_creation\":\"2018-05-09T22:00:00.000Z\",\"acquitte\":true,\n\"adresse_facturation\":\"12 rue des chemins Paris 75002\",\"visite_id\":3,\"patient_id\":1,\"analyse_id\":1},\n{\"id\":1,\"montant\":\"70\",\"date_creation\":\"2018-05-08T22:00:00.000Z\",\"acquitte\":false,\n\"adresse_facturation\":\"12 rue des chemins Paris 75002\",\"visite_id\":3,\"patient_id\":1,\"analyse_id\":1}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "bill",
            "description": "<p>No bill found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/facture.js",
    "groupTitle": "facture"
  },
  {
    "type": "get",
    "url": "/:id",
    "title": "get a bill by its id",
    "name": "getById",
    "group": "facture",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the bill</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "montant",
            "description": "<p>amount of the bill</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_creation",
            "description": "<p>creation date of the bill</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "boolean",
            "description": "<p>acquitte status of the bill</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adresse_facturation",
            "description": "<p>facturation address of the bill</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "visite_id",
            "description": "<p>id of the appointment</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "patient_id",
            "description": "<p>id of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "analyse_id",
            "description": "<p>id of the analysis</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"id\":2,\"montant\":\"80\",\"date_creation\":\"2018-05-09T22:00:00.000Z\",\"acquitte\":true,\n\"adresse_facturation\":\"12 rue des chemins Paris 75002\",\"visite_id\":3,\"patient_id\":1,\"analyse_id\":1}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "bill",
            "description": "<p>No bill found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/facture.js",
    "groupTitle": "facture"
  },
  {
    "type": "get",
    "url": "/patient/:id",
    "title": "get patient bills",
    "name": "getByPatientId",
    "group": "facture",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the bill</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "montant",
            "description": "<p>amount of the bill</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_creation",
            "description": "<p>creation date of the bill</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "boolean",
            "description": "<p>acquitte status of the bill</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adresse_facturation",
            "description": "<p>facturation address of the bill</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "visite_id",
            "description": "<p>id of the appointment</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "patient_id",
            "description": "<p>id of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "analyse_id",
            "description": "<p>id of the analysis</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"id\":2,\"montant\":\"80\",\"date_creation\":\"2018-05-09T22:00:00.000Z\",\"acquitte\":true,\n\"adresse_facturation\":\"12 rue des chemins Paris 75002\",\"visite_id\":3,\"patient_id\":1,\"analyse_id\":1}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "bill",
            "description": "<p>No bill found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/facture.js",
    "groupTitle": "facture"
  },
  {
    "type": "post",
    "url": "/new",
    "title": "create a bill",
    "name": "new",
    "group": "facture",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "montant",
            "description": "<p>amount of the bill</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_creation",
            "description": "<p>creation date of the bill</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "boolean",
            "description": "<p>acquitte status of the bill</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adresse_facturation",
            "description": "<p>facturation address of the bill</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "visite_id",
            "description": "<p>id of the appointment</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "patient_id",
            "description": "<p>id of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "analyse_id",
            "description": "<p>id of the analysis</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"true\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/facture.js",
    "groupTitle": "facture"
  },
  {
    "type": "put",
    "url": "/:id",
    "title": "update bill",
    "name": "update",
    "group": "facture",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the bill</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "montant",
            "description": "<p>amount of the bill</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_creation",
            "description": "<p>creation date of the bill</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "boolean",
            "description": "<p>acquitte status of the bill</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adresse_facturation",
            "description": "<p>facturation address of the bill</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "visite_id",
            "description": "<p>id of the appointment</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "patient_id",
            "description": "<p>id of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "analyse_id",
            "description": "<p>id of the analysis</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"true\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/facture.js",
    "groupTitle": "facture"
  },
  {
    "type": "delete",
    "url": "/:id",
    "title": "delete an patient",
    "name": "deleteById",
    "group": "patient",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>patient id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "boolean",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\ntrue",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\n\"parameters are not all integers\"",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/patient.js",
    "groupTitle": "patient"
  },
  {
    "type": "get",
    "url": "/all",
    "title": "get all patients",
    "name": "getAll",
    "group": "patient",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": "<p>name of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "prenom",
            "description": "<p>firstname of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>email of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "num_secu",
            "description": "<p>secu number of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adresse",
            "description": "<p>adress of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ville",
            "description": "<p>city of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "cp",
            "description": "<p>postal code of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "identifiant",
            "description": "<p>username of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_naissance",
            "description": "<p>birthdate of the patient</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"id\":17,\"nom\":\"Chevre\",\"prenom\":\"Michel\",\"mail\":\"michevre@gmail.com\",\"num_secu\":1642572288,\n\"adresse\":\"5 rue du sentier\",\"ville\":\"Paris\",\"cp\":75002,\"identifiant\":\"PM9870\",\"password\":\"michevre\",\n\"date_naissance\":\"1964-02-01T23:00:00.000Z\"},\n{\"id\":18,\"nom\":\"Lotre\",\"prenom\":\"Sandra\",\"mail\":\"sandizz@gmail.com\",\"num_secu\":1982472288,\n\"adresse\":\"5 rue du cimetière\",\"ville\":\"Paris\",\"cp\":75008,\"identifiant\":\"MA1472\",\"password\":\"sandrada\",\n\"date_naissance\":\"1998-01-04T23:00:00.000Z\"},{\"id\":4,\"nom\":\"Chevre\",\"prenom\":\"Michel\",\n\"mail\":\"michevre@gmail.com\",\"num_secu\":1642572288,\"adresse\":\"5 rue du sentier\",\"ville\":\"Paris\",\"cp\":75002,\n\"identifiant\":\"PM9870\",\"password\":\"michevre\",\"date_naissance\":\"1964-02-01T23:00:00.000Z\"},\n{\"id\":20,\"nom\":\"Arnould\",\"prenom\":\"Honorine\",\"mail\":\"arnould.honorine@live.fr\",\"num_secu\":123456789,\n\"adresse\":\"5 rue Diderot\",\"ville\":\"Issy-Les-Moulineaux\",\"cp\":92130,\"identifiant\":\"HNZ200\",\n\"password\":\"dj400\",\"date_naissance\":\"1998-11-20T23:00:00.000Z\"},{\"id\":21,\"nom\":\"Jacques\",\"prenom\":\"Delmor\",\n\"mail\":\"jacques.Delmor@live.fr\",\"num_secu\":12345678,\"adresse\":\"1 rue du Château\",\"ville\":\"Clamart\",\n\"cp\":92240,\"identifiant\":\"JD500\",\"password\":\"gh100\",\"date_naissance\":\"1969-12-31T23:00:00.000Z\"},\n{\"id\":22,\"nom\":\"Vervaine\",\"prenom\":\"Paul\",\"mail\":\"paul.vervaine@live.fr\",\"num_secu\":123456789,\n\"adresse\":\"12 rue de la portiere\",\"ville\":\"Paris\",\"cp\":75002,\"identifiant\":\"PV96\",\"password\":\"pv500\",\n\"date_naissance\":\"1996-07-15T22:00:00.000Z\"},{\"id\":1,\"nom\":\"Delaye\",\"prenom\":\"Jack\",\"mail\":\"delay.jack@live.fr\",\n\"num_secu\":12345,\"adresse\":\"12 avenue de la prairie\",\"ville\":\"Paris\",\"cp\":75001,\"identifiant\":\"IZ500\",\n\"password\":\"dj500\",\"date_naissance\":\"1987-01-23T23:00:00.000Z\"},\n{\"id\":23,\"nom\":\"Griezmann\",\"prenom\":\"Antoine\",\"mail\":\"griezou@gmail.com\",\"num_secu\":1548792534,\n\"adresse\":\"2 rue des champions du monde\",\"ville\":\"Paris\",\"cp\":75001,\"identifiant\":\"agriezmann\",\"password\":\"pogba\",\n\"date_naissance\":\"1991-03-20T23:00:00.000Z\"}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "employee",
            "description": "<p>No employee found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/patient.js",
    "groupTitle": "patient"
  },
  {
    "type": "get",
    "url": "/ville/:ville",
    "title": "get a patients by city",
    "name": "getByCity",
    "group": "patient",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": "<p>name of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "prenom",
            "description": "<p>firstname of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>email of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "num_secu",
            "description": "<p>secu number of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adresse",
            "description": "<p>adress of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ville",
            "description": "<p>city of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "cp",
            "description": "<p>postal code of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "identifiant",
            "description": "<p>username of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_naissance",
            "description": "<p>birthdate of the patient</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"id\":17,\"nom\":\"Chevre\",\"prenom\":\"Michel\",\"mail\":\"michevre@gmail.com\",\"num_secu\":1642572288,\n\"adresse\":\"5 rue du sentier\",\"ville\":\"Paris\",\"cp\":75002,\"identifiant\":\"PM9870\",\"password\":\"michevre\",\n\"date_naissance\":\"1964-02-01T23:00:00.000Z\"}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "patient",
            "description": "<p>No patient found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/patient.js",
    "groupTitle": "patient"
  },
  {
    "type": "get",
    "url": "/cp/:cp",
    "title": "get a patients by postal code",
    "name": "getByCp",
    "group": "patient",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": "<p>name of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "prenom",
            "description": "<p>firstname of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>email of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "num_secu",
            "description": "<p>secu number of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adresse",
            "description": "<p>adress of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ville",
            "description": "<p>city of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "cp",
            "description": "<p>postal code of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "identifiant",
            "description": "<p>username of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_naissance",
            "description": "<p>birthdate of the patient</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"id\":17,\"nom\":\"Chevre\",\"prenom\":\"Michel\",\"mail\":\"michevre@gmail.com\",\"num_secu\":1642572288,\n\"adresse\":\"5 rue du sentier\",\"ville\":\"Paris\",\"cp\":75002,\"identifiant\":\"PM9870\",\"password\":\"michevre\",\n\"date_naissance\":\"1964-02-01T23:00:00.000Z\"}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "patient",
            "description": "<p>No patient found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/patient.js",
    "groupTitle": "patient"
  },
  {
    "type": "get",
    "url": "/id/:id",
    "title": "get a patient by its id",
    "name": "getById",
    "group": "patient",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": "<p>name of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "prenom",
            "description": "<p>firstname of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>email of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "num_secu",
            "description": "<p>secu number of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adresse",
            "description": "<p>adress of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ville",
            "description": "<p>city of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "cp",
            "description": "<p>postal code of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "identifiant",
            "description": "<p>username of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_naissance",
            "description": "<p>birthdate of the patient</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"id\":17,\"nom\":\"Chevre\",\"prenom\":\"Michel\",\"mail\":\"michevre@gmail.com\",\"num_secu\":1642572288,\n\"adresse\":\"5 rue du sentier\",\"ville\":\"Paris\",\"cp\":75002,\"identifiant\":\"PM9870\",\"password\":\"michevre\",\n\"date_naissance\":\"1964-02-01T23:00:00.000Z\"}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "patient",
            "description": "<p>No patient found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/patient.js",
    "groupTitle": "patient"
  },
  {
    "type": "get",
    "url": "/:identifiant",
    "title": "get a patient by its username",
    "name": "getByIdentifiant",
    "group": "patient",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": "<p>name of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "prenom",
            "description": "<p>firstname of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>email of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "num_secu",
            "description": "<p>secu number of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adresse",
            "description": "<p>adress of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ville",
            "description": "<p>city of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "cp",
            "description": "<p>postal code of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "identifiant",
            "description": "<p>username of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_naissance",
            "description": "<p>birthdate of the patient</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"id\":17,\"nom\":\"Chevre\",\"prenom\":\"Michel\",\"mail\":\"michevre@gmail.com\",\"num_secu\":1642572288,\n\"adresse\":\"5 rue du sentier\",\"ville\":\"Paris\",\"cp\":75002,\"identifiant\":\"PM9870\",\"password\":\"michevre\",\n\"date_naissance\":\"1964-02-01T23:00:00.000Z\"}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "patient",
            "description": "<p>No patient found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/patient.js",
    "groupTitle": "patient"
  },
  {
    "type": "get",
    "url": "/name/:nom",
    "title": "get a patient by its name",
    "name": "getByName",
    "group": "patient",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": "<p>name of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "prenom",
            "description": "<p>firstname of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>email of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "num_secu",
            "description": "<p>secu number of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adresse",
            "description": "<p>adress of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ville",
            "description": "<p>city of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "cp",
            "description": "<p>postal code of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "identifiant",
            "description": "<p>username of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_naissance",
            "description": "<p>birthdate of the patient</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"id\":17,\"nom\":\"Chevre\",\"prenom\":\"Michel\",\"mail\":\"michevre@gmail.com\",\"num_secu\":1642572288,\n\"adresse\":\"5 rue du sentier\",\"ville\":\"Paris\",\"cp\":75002,\"identifiant\":\"PM9870\",\"password\":\"michevre\",\n\"date_naissance\":\"1964-02-01T23:00:00.000Z\"}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "patient",
            "description": "<p>No patient found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/patient.js",
    "groupTitle": "patient"
  },
  {
    "type": "put",
    "url": "/new",
    "title": "create a patient",
    "name": "new",
    "group": "patient",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": "<p>name of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "prenom",
            "description": "<p>firstname of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>email of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "num_secu",
            "description": "<p>secu number of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adresse",
            "description": "<p>adress of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ville",
            "description": "<p>city of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "cp",
            "description": "<p>postal code of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "identifiant",
            "description": "<p>username of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_naissance",
            "description": "<p>birthdate of the patient</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"true\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/patient.js",
    "groupTitle": "patient"
  },
  {
    "type": "post",
    "url": "/new",
    "title": "create a patient",
    "name": "new",
    "group": "patient",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": "<p>name of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "prenom",
            "description": "<p>firstname of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>email of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "num_secu",
            "description": "<p>secu number of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adresse",
            "description": "<p>adress of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ville",
            "description": "<p>city of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "cp",
            "description": "<p>postal code of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "identifiant",
            "description": "<p>username of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_naissance",
            "description": "<p>birthdate of the patient</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"true\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/patient.js",
    "groupTitle": "patient"
  },
  {
    "type": "delete",
    "url": "/:id",
    "title": "delete a proposal",
    "name": "deleteById",
    "group": "proposal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>proposal id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "boolean",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\ntrue",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\n\"parameters are not all integers\"",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/proposition.js",
    "groupTitle": "proposal"
  },
  {
    "type": "get",
    "url": "/all",
    "title": "get all proposal",
    "name": "getAll",
    "group": "proposition",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the proposal</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "intitule",
            "description": "<p>value of the proposal</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"id\":2,\"intitule\":\"Non\"},{\"id\":1,\"intitule\":\"Oui\"},{\"id\":3,\"intitule\":\"peu\"}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "proposal",
            "description": "<p>No proposal found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/proposition.js",
    "groupTitle": "proposition"
  },
  {
    "type": "get",
    "url": "/:id",
    "title": "get a proposal byt its id",
    "name": "getById",
    "group": "proposition",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the proposal</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "intitule",
            "description": "<p>value of the proposal</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"id\":2,\"intitule\":\"Non\"},{\"id\":1,\"intitule\":\"Oui\"},{\"id\":3,\"intitule\":\"peu\"}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "proposal",
            "description": "<p>No proposal found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/proposition.js",
    "groupTitle": "proposition"
  },
  {
    "type": "post",
    "url": "/new",
    "title": "create a new proposal",
    "name": "new",
    "group": "proposition",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "intitule",
            "description": "<p>value of the proposal</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"true\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/proposition.js",
    "groupTitle": "proposition"
  },
  {
    "type": "put",
    "url": "/:id",
    "title": "update a proposal",
    "name": "update",
    "group": "proposition",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the proposal</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "intitule",
            "description": "<p>value of the proposal</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"true\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/proposition.js",
    "groupTitle": "proposition"
  },
  {
    "type": "post",
    "url": "/:id/reponse/:idAnswer",
    "title": "add answer to a question",
    "name": "addAnswer",
    "group": "question",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>value of the question</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "answer_id",
            "description": "<p>id of the answer</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"true\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/question.js",
    "groupTitle": "question"
  },
  {
    "type": "delete",
    "url": "/:id",
    "title": "delete a question",
    "name": "deleteById",
    "group": "question",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>question id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "boolean",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\ntrue",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\n\"parameters are not all integers\"",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/question.js",
    "groupTitle": "question"
  },
  {
    "type": "get",
    "url": "/all",
    "title": "get all questions",
    "name": "getAll",
    "group": "question",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the question</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "intitule",
            "description": "<p>value of the question</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"id\":2,\"intitule\":\"Ressentez-vous des douleurs musculaires ?\"},{\"id\":3,\"intitule\":\"Ressentez-vous des nausées ?\"}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "question",
            "description": "<p>No question found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/question.js",
    "groupTitle": "question"
  },
  {
    "type": "get",
    "url": "/all",
    "title": "get a question by its id",
    "name": "getById",
    "group": "question",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the question</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "intitule",
            "description": "<p>value of the question</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"id\":2,\"intitule\":\"Ressentez-vous des douleurs musculaires ?\"},{\"id\":3,\"intitule\":\"Ressentez-vous des nausées ?\"}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "question",
            "description": "<p>No question found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/question.js",
    "groupTitle": "question"
  },
  {
    "type": "post",
    "url": "/new",
    "title": "create a new question",
    "name": "new",
    "group": "question",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "intitule",
            "description": "<p>value of the question</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"true\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/question.js",
    "groupTitle": "question"
  },
  {
    "type": "put",
    "url": "/:id",
    "title": "update a question",
    "name": "update",
    "group": "question",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the question</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "intitule",
            "description": "<p>value of the question</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"true\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/question.js",
    "groupTitle": "question"
  },
  {
    "type": "delete",
    "url": "/:id",
    "title": "delete an result",
    "name": "deleteById",
    "group": "result",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>result id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "boolean",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\ntrue",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\n\"parameters are not all integers\"",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/resultat.js",
    "groupTitle": "result"
  },
  {
    "type": "get",
    "url": "/all",
    "title": "get all results",
    "name": "getAll",
    "group": "result",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the result</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": "<p>name of the result</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "valeur_min",
            "description": "<p>minimum value of the result</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "valeur_max",
            "description": "<p>maximum value of the result</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "categorie_id",
            "description": "<p>id of the result's category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "unit",
            "description": "<p>unit type of the result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"id\":25,\"nom\":\"Proteines\",\"valeur_min\":\"0.25\",\"valeur_max\":\"0.50\",\"categorie_id\":2,\"unit\":\"mg/L\"},\n{\"id\":26,\"nom\":\"Lipides\",\"valeur_min\":\"0.25\",\"valeur_max\":\"0.50\",\"categorie_id\":2,\"unit\":\"mg/L\"},\n{\"id\":27,\"nom\":\"Glucides\",\"valeur_min\":\"0.25\",\"valeur_max\":\"0.50\",\"categorie_id\":2,\"unit\":\"mg/L\"}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "result",
            "description": "<p>No result found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/resultat.js",
    "groupTitle": "result"
  },
  {
    "type": "get",
    "url": "/categorie/:id",
    "title": "get results of a category",
    "name": "getByCategory",
    "group": "result",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the result</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": "<p>name of the result</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "valeur_min",
            "description": "<p>minimum value of the result</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "valeur_max",
            "description": "<p>maximum value of the result</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "categorie_id",
            "description": "<p>id of the result's category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "unit",
            "description": "<p>unit type of the result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"id\":25,\"nom\":\"Proteines\",\"valeur_min\":\"0.25\",\"valeur_max\":\"0.50\",\"categorie_id\":2,\"unit\":\"mg/L\"},\n{\"id\":26,\"nom\":\"Lipides\",\"valeur_min\":\"0.25\",\"valeur_max\":\"0.50\",\"categorie_id\":2,\"unit\":\"mg/L\"},\n{\"id\":27,\"nom\":\"Glucides\",\"valeur_min\":\"0.25\",\"valeur_max\":\"0.50\",\"categorie_id\":2,\"unit\":\"mg/L\"}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "result",
            "description": "<p>No result found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/resultat.js",
    "groupTitle": "result"
  },
  {
    "type": "get",
    "url": "/:id",
    "title": "get a result by its id",
    "name": "getById",
    "group": "result",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the result</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": "<p>name of the result</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "valeur_min",
            "description": "<p>minimum value of the result</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "valeur_max",
            "description": "<p>maximum value of the result</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "categorie_id",
            "description": "<p>id of the result's category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "unit",
            "description": "<p>unit type of the result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"id\":25,\"nom\":\"Proteines\",\"valeur_min\":\"0.25\",\"valeur_max\":\"0.50\",\"categorie_id\":2,\"unit\":\"mg/L\"}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "result",
            "description": "<p>No result found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/resultat.js",
    "groupTitle": "result"
  },
  {
    "type": "get",
    "url": "/:id/categorie",
    "title": "get a result's category",
    "name": "getCategory",
    "group": "result",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": "<p>name of the category</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"id\":1,\"nom\":\"Hematocytologie\"}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "category",
            "description": "<p>No category found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/resultat.js",
    "groupTitle": "result"
  },
  {
    "type": "post",
    "url": "/new",
    "title": "create a result",
    "name": "new",
    "group": "result",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": "<p>name of the result</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "valeur_min",
            "description": "<p>minimum value of the result</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "valeur_max",
            "description": "<p>maximum value of the result</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "categorie_id",
            "description": "<p>id of the result's category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "unit",
            "description": "<p>unit type of the result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"true\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/resultat.js",
    "groupTitle": "result"
  },
  {
    "type": "put",
    "url": "/:id",
    "title": "get results of a category",
    "name": "update",
    "group": "result",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the result</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": "<p>name of the result</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "valeur_min",
            "description": "<p>minimum value of the result</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "valeur_max",
            "description": "<p>maximum value of the result</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "categorie_id",
            "description": "<p>id of the result's category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "unit",
            "description": "<p>unit type of the result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"true\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/resultat.js",
    "groupTitle": "result"
  },
  {
    "type": "post",
    "url": "/:code/answer/add/:idq/:ida",
    "title": "add a proposition to a question of a survey",
    "name": "addParticipation",
    "group": "survey",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>code of the survey</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "idq",
            "description": "<p>id of the question</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "ida",
            "description": "<p>id of the proposition</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"true\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/etude.js",
    "groupTitle": "survey"
  },
  {
    "type": "post",
    "url": "/:id/participate/:idPatient",
    "title": "add a participation to a survey",
    "name": "addParticipation",
    "group": "survey",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the survey</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "idPatient",
            "description": "<p>id of the patient</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"true\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/etude.js",
    "groupTitle": "survey"
  },
  {
    "type": "post",
    "url": "/:id/addQuestion/:idQuestion",
    "title": "add a question to a survey",
    "name": "addQuestion",
    "group": "survey",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the survey</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "question_id",
            "description": "<p>id of the question</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"true\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/etude.js",
    "groupTitle": "survey"
  },
  {
    "type": "get",
    "url": "/:code/qcount",
    "title": "get number of surveys",
    "name": "countByCode",
    "group": "survey",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "number",
            "description": "<p>number of surveys</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{10}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "survey",
            "description": "<p>No survey found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/etude.js",
    "groupTitle": "survey"
  },
  {
    "type": "delete",
    "url": "/:id",
    "title": "delete an study",
    "name": "deleteById",
    "group": "survey",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>study id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "boolean",
            "description": "<ul> <li></li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\ntrue",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\n\"parameters are not all integers\"",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/etude.js",
    "groupTitle": "survey"
  },
  {
    "type": "get",
    "url": "/reponses",
    "title": "get all answers number of answers for each question and proposal",
    "name": "getAllAnswers",
    "group": "survey",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code_etude",
            "description": "<p>study code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "question",
            "description": "<p>study question</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reponse",
            "description": "<p>study proposal</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "number",
            "description": "<p>number of answers</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"code_etude\":\"AZDZ\", \"question\":\"Ressentez-vous des douleurs ?\", \"reponse\":\"Oui\", \"nbr_reponses\": 10}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "survey",
            "description": "<p>No survey found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/etude.js",
    "groupTitle": "survey"
  },
  {
    "type": "get",
    "url": "/all",
    "title": "get all surveys",
    "name": "getAllStudies",
    "group": "survey",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the survey</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code_etude",
            "description": "<p>code of the survey</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": "<p>name of the survey</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>date of the survey</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the survey</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "employe_id",
            "description": "<p>patient id which created the survey</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"code_etude\":\"A58ZMP\",\"id\":6,\"nom\":\"Enquête sur les saucisse\",\"date\":\"2018-07-19T22:00:00.000Z\",\n\"description\":\"Connaissez-vous vraiment les saucisses?\",\"employe_id\":4},\n{\"code_etude\":\"45KSTRZ\",\"id\":3,\"nom\":\"Etudes du paracetamol\",\"date\":\"2018-02-17T23:00:00.000Z\",\n\"description\":\"Etudes sur les effets du paracetamol durant les 2 premières semaines de traitement\",\"employe_id\":4}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "survey",
            "description": "<p>No survey found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/etude.js",
    "groupTitle": "survey"
  },
  {
    "type": "get",
    "url": "/:code/questions",
    "title": "get survey's proposals",
    "name": "getAnswers",
    "group": "survey",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the proposal</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "intitule",
            "description": "<p>value of the proposal</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "question_id",
            "description": "<p>id of the question</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"id\":2,\"nom\":\"Oui\"}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "proposal",
            "description": "<p>No proposal found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/etude.js",
    "groupTitle": "survey"
  },
  {
    "type": "get",
    "url": "/:code",
    "title": "get a survey by its code",
    "name": "getByCode",
    "group": "survey",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the survey</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code_etude",
            "description": "<p>code of the survey</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": "<p>name of the survey</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>date of the survey</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the survey</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "employe_id",
            "description": "<p>patient id which created the survey</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"code_etude\":\"A58ZMP\",\"id\":6,\"nom\":\"Enquête sur les saucisse\",\"date\":\"2018-07-19T22:00:00.000Z\",\n\"description\":\"Connaissez-vous vraiment les saucisses?\",\"employe_id\":4}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "survey",
            "description": "<p>No survey found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/etude.js",
    "groupTitle": "survey"
  },
  {
    "type": "get",
    "url": "/employe/:id",
    "title": "get employe surveys list",
    "name": "getByEmployeId",
    "group": "survey",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the survey</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code_etude",
            "description": "<p>code of the survey</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": "<p>name of the survey</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>date of the survey</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the survey</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "employe_id",
            "description": "<p>patient id which created the survey</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"code_etude\":\"A58ZMP\",\"id\":6,\"nom\":\"Enquête sur les saucisse\",\"date\":\"2018-07-19T22:00:00.000Z\",\n\"description\":\"Connaissez-vous vraiment les saucisses?\",\"employe_id\":4},\n{\"code_etude\":\"45KSTRZ\",\"id\":3,\"nom\":\"Etudes du paracetamol\",\"date\":\"2018-02-17T23:00:00.000Z\",\n\"description\":\"Etudes sur les effets du paracetamol durant les 2 premières semaines de traitement\",\"employe_id\":4}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "survey",
            "description": "<p>No survey found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/etude.js",
    "groupTitle": "survey"
  },
  {
    "type": "get",
    "url": "/nbReponses/:etudeCode/:questionId/:reponseId",
    "title": "get survey number of answers",
    "name": "getNbAnswers",
    "group": "survey",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "number",
            "description": "<p>number of answers</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{10}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "survey",
            "description": "<p>No survey found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/etude.js",
    "groupTitle": "survey"
  },
  {
    "type": "get",
    "url": "/nbReponses/:etudeCode/:questionId/:reponseId",
    "title": "get survey number of participations",
    "name": "getNbParticipations",
    "group": "survey",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "number",
            "description": "<p>number of participations</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{10}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "survey",
            "description": "<p>No survey found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/etude.js",
    "groupTitle": "survey"
  },
  {
    "type": "get",
    "url": "/patient/liste/:id",
    "title": "get a list of the patient which participate to the study",
    "name": "getParticipatingPatient",
    "group": "survey",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the participation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "participation_status",
            "description": "<p>status of the participation</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "patient_id",
            "description": "<p>id of the patient which participate to the study</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "etude_id",
            "description": "<p>id of the study</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"id\":1,\"participation_status\":false, \"patient_id\":1,\"etude_id\":3}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "participation",
            "description": "<p>No participation found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/etude.js",
    "groupTitle": "survey"
  },
  {
    "type": "get",
    "url": "/:code/questions",
    "title": "get survey's questions",
    "name": "getQuestions",
    "group": "survey",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the question</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "intitule",
            "description": "<p>value of the question</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"id\":5,\"nom\":\"Dormez-vous beaucoup ?\"}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "question",
            "description": "<p>No question found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/etude.js",
    "groupTitle": "survey"
  },
  {
    "type": "post",
    "url": "/new",
    "title": "create a study",
    "name": "new",
    "group": "survey",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code_etude",
            "description": "<p>code of the survey</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": "<p>name of the survey</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>date of the survey</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the survey</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "employe_id",
            "description": "<p>patient id which created the survey</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"true\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/etude.js",
    "groupTitle": "survey"
  },
  {
    "type": "delete",
    "url": "/:id",
    "title": "remove a question from a survey",
    "name": "removeQuestion",
    "group": "survey",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>study id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id_question",
            "description": "<p>id of the question</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "boolean",
            "description": "<ul> <li></li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\ntrue",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\n\"parameters are not all integers\"",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/etude.js",
    "groupTitle": "survey"
  },
  {
    "type": "put",
    "url": "/new",
    "title": "update a study",
    "name": "update",
    "group": "survey",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the survey</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code_etude",
            "description": "<p>code of the survey</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": "<p>name of the survey</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>date of the survey</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the survey</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "employe_id",
            "description": "<p>patient id which created the survey</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"true\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/etude.js",
    "groupTitle": "survey"
  },
  {
    "type": "post",
    "url": "/answer/participate/:statusp/:idp/:code",
    "title": "update a participation of a survey",
    "name": "updateParticipation",
    "group": "survey",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>code of the survey</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "idp",
            "description": "<p>id of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "statusp",
            "description": "<p>status of the participation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"true\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/etude.js",
    "groupTitle": "survey"
  },
  {
    "type": "get",
    "url": "/all",
    "title": "get all appointments",
    "name": "getAll",
    "group": "visite",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the appointment</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "date",
            "description": "<p>date of the appointment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the appointment</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "employe_id",
            "description": "<p>id of the appointment</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "patient_id",
            "description": "<p>id of the appointment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"id\":2,\"date\":\"2018-07-18T15:50:00.000Z\",\"status\":\"planifiée\",\"patient_id\":1,\"employe_id\":13},\n{\"id\":3,\"date\":\"2018-07-22T15:15:00.000Z\",\"status\":\"planifiée\",\"patient_id\":1,\"employe_id\":4},\n{\"id\":4,\"date\":\"2018-07-21T15:15:00.000Z\",\"status\":\"planifiée\",\"patient_id\":1,\"employe_id\":4}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "appointment",
            "description": "<p>No appointment found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/visite.js",
    "groupTitle": "visite"
  },
  {
    "type": "get",
    "url": "/date/:date",
    "title": "get all appointments by date",
    "name": "getByDate",
    "group": "visite",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the appointment</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "date",
            "description": "<p>date of the appointment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the appointment</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "employe_id",
            "description": "<p>id of the appointment</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "patient_id",
            "description": "<p>id of the appointment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"id\":2,\"date\":\"2018-07-18T15:50:00.000Z\",\"status\":\"planifiée\",\"patient_id\":1,\"employe_id\":13}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "appointment",
            "description": "<p>No appointment found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/visite.js",
    "groupTitle": "visite"
  },
  {
    "type": "get",
    "url": "/:id",
    "title": "get an appointment by its id",
    "name": "getById",
    "group": "visite",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the appointment</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "date",
            "description": "<p>date of the appointment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the appointment</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "employe_id",
            "description": "<p>id of the appointment</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "patient_id",
            "description": "<p>id of the appointment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"id\":2,\"date\":\"2018-07-18T15:50:00.000Z\",\"status\":\"planifiée\",\"patient_id\":1,\"employe_id\":13}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "appointment",
            "description": "<p>No appointment found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/visite.js",
    "groupTitle": "visite"
  },
  {
    "type": "get",
    "url": "/patient/:id",
    "title": "get all patient appointments",
    "name": "getByPatientId",
    "group": "visite",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the appointment</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "date",
            "description": "<p>date of the appointment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the appointment</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "employe_id",
            "description": "<p>id of the appointment</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "patient_id",
            "description": "<p>id of the appointment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"id\":2,\"date\":\"2018-07-18T15:50:00.000Z\",\"status\":\"planifiée\",\"patient_id\":1,\"employe_id\":13}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "appointment",
            "description": "<p>No appointment found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/visite.js",
    "groupTitle": "visite"
  },
  {
    "type": "get",
    "url": "/status/:status",
    "title": "get all appointments by status",
    "name": "getByStatus",
    "group": "visite",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the appointment</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "date",
            "description": "<p>date of the appointment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the appointment</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "employe_id",
            "description": "<p>id of the appointment</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "patient_id",
            "description": "<p>id of the appointment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"id\":2,\"date\":\"2018-07-18T15:50:00.000Z\",\"status\":\"planifiée\",\"patient_id\":1,\"employe_id\":13}]\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "appointment",
            "description": "<p>No appointment found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/visite.js",
    "groupTitle": "visite"
  },
  {
    "type": "post",
    "url": "/new",
    "title": "create an appointment",
    "name": "new",
    "group": "visite",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the appointment</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "date",
            "description": "<p>date of the appointment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the appointment</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "employe_id",
            "description": "<p>id of the appointment</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "patient_id",
            "description": "<p>id of the appointment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"id\":2,\"date\":\"2018-07-18T15:50:00.000Z\",\"status\":\"planifiée\",\"patient_id\":1,\"employe_id\":13}]\"",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "\"true\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/visite.js",
    "groupTitle": "visite"
  },
  {
    "type": "put",
    "url": "/status/:status",
    "title": "update an appointment",
    "name": "update",
    "group": "visite",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the appointment</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "date",
            "description": "<p>date of the appointment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the appointment</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "employe_id",
            "description": "<p>id of the appointment</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "patient_id",
            "description": "<p>id of the appointment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"[{\"id\":2,\"date\":\"2018-07-18T15:50:00.000Z\",\"status\":\"planifiée\",\"patient_id\":1,\"employe_id\":13}]\"",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "\"true\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Greg/Desktop/ProjetAnnuel/Lab-Companion/Server-Web-Api/routes/visite.js",
    "groupTitle": "visite"
  }
] });
