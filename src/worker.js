import astro from '@astrojs/cloudflare/entrypoints/server';
import {securityHeaders} from './security.js';
export async function handleRequest(request,env,context,render=astro.fetch){
 const url=new URL(request.url);
 const alias=url.hostname==='www.panfilovpark.com'||(url.hostname==='panfilovpark.com'&&url.protocol==='http:');
 if(alias||['/en','/ru'].includes(url.pathname)){
  if(alias){url.hostname='panfilovpark.com';url.protocol='https:';url.port='';}
  if(['/en','/ru'].includes(url.pathname))url.pathname+='/';
  return new Response(null,{status:308,headers:{location:url.toString(),'cache-control':'no-store',...securityHeaders}});
 }
 const response=await render(request,env,context);const headers=new Headers(response.headers);
 for(const[k,v]of Object.entries(securityHeaders))headers.set(k,v);
 if(response.status===404){headers.set('x-robots-tag','noindex');headers.set('cache-control','no-store');}
 return new Response(request.method==='HEAD'?null:response.body,{status:response.status,headers});
}
export default{fetch:handleRequest};
