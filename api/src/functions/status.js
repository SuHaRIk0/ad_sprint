const {app}=require('@azure/functions');app.http('status',{methods:['GET'],authLevel:'anonymous',handler:async()=>({jsonBody:{message:'Cloud API online',time:new Date().toISOString()}})});
