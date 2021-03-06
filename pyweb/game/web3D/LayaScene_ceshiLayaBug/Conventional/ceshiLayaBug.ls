{
	"version":"LAYASCENE3D:01",
	"data":{
		"type":"Scene3D",
		"props":{
			"name":"ceshiLayaBug",
			"ambientColor":[
				0.212,
				0.227,
				0.259
			],
			"lightmaps":[],
			"enableFog":false,
			"fogStart":0,
			"fogRange":300,
			"fogColor":[
				0.5,
				0.5,
				0.5
			]
		},
		"child":[
			{
				"type":"Camera",
				"props":{
					"name":"Main Camera",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						-1,
						3,
						-10
					],
					"rotation":[
						0,
						1,
						0,
						0
					],
					"scale":[
						1,
						1,
						1
					],
					"clearFlag":1,
					"orthographic":false,
					"fieldOfView":60,
					"nearPlane":0.3,
					"farPlane":1000,
					"viewport":[
						0,
						0,
						1,
						1
					],
					"clearColor":[
						0.1921569,
						0.3019608,
						0.4745098,
						0
					]
				},
				"components":[],
				"child":[]
			},
			{
				"type":"DirectionLight",
				"props":{
					"name":"Directional Light",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						0,
						16.7,
						0
					],
					"rotation":[
						0.1093816,
						0.8754261,
						0.4082179,
						-0.2345697
					],
					"scale":[
						1,
						1,
						1
					],
					"intensity":1,
					"lightmapBakedType":0,
					"color":[
						1,
						0.9568627,
						0.8392157
					]
				},
				"components":[],
				"child":[]
			},
			{
				"type":"MeshSprite3D",
				"props":{
					"name":"Plane (1)",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						-0.88,
						0.44,
						-1.882
					],
					"rotation":[
						0,
						0,
						0,
						-1
					],
					"scale":[
						1,
						1,
						1
					],
					"meshPath":"Library/unity default resources-Plane.lm",
					"enableRender":true,
					"materials":[
						{
							"path":"Assets/LayaAir3D/LayaTool/LayaResouce/Materials/ZhiFuBao.lmat"
						}
					]
				},
				"components":[
					{
						"type":"PhysicsCollider",
						"restitution":0,
						"friction":0.5,
						"rollingFriction":0,
						"shapes":[
							{
								"type":"BoxColliderShape",
								"center":[
									0,
									0,
									0
								],
								"size":[
									10,
									2.220446E-16,
									10
								]
							},
							{
								"type":"MeshColliderShape",
								"mesh":"Library/unity default resources-Plane.lm"
							}
						],
						"isTrigger":false
					}
				],
				"child":[]
			},
			{
				"type":"MeshSprite3D",
				"props":{
					"name":"Plane (2)",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						-0.88,
						0.44,
						8.12
					],
					"rotation":[
						0,
						0,
						0,
						-1
					],
					"scale":[
						1,
						1,
						1
					],
					"meshPath":"Library/unity default resources-Plane.lm",
					"enableRender":true,
					"materials":[
						{
							"path":"Assets/LayaAir3D/LayaTool/LayaResouce/Materials/WeChat.lmat"
						}
					]
				},
				"components":[
					{
						"type":"PhysicsCollider",
						"restitution":0,
						"friction":0.5,
						"rollingFriction":0,
						"shapes":[
							{
								"type":"BoxColliderShape",
								"center":[
									0,
									0,
									0
								],
								"size":[
									10,
									2.220446E-16,
									10
								]
							},
							{
								"type":"MeshColliderShape",
								"mesh":"Library/unity default resources-Plane.lm"
							}
						],
						"isTrigger":false
					}
				],
				"child":[]
			},
			{
				"type":"MeshSprite3D",
				"props":{
					"name":"Plane (3)",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						-0.88,
						0.44,
						18.122
					],
					"rotation":[
						0,
						0,
						0,
						-1
					],
					"scale":[
						1,
						1,
						1
					],
					"meshPath":"Library/unity default resources-Plane.lm",
					"enableRender":true,
					"materials":[
						{
							"path":"Assets/LayaAir3D/LayaTool/LayaResouce/Materials/ZhiFuBao.lmat"
						}
					]
				},
				"components":[
					{
						"type":"PhysicsCollider",
						"restitution":0,
						"friction":0.5,
						"rollingFriction":0,
						"shapes":[
							{
								"type":"BoxColliderShape",
								"center":[
									0,
									0,
									0
								],
								"size":[
									10,
									2.220446E-16,
									10
								]
							},
							{
								"type":"MeshColliderShape",
								"mesh":"Library/unity default resources-Plane.lm"
							}
						],
						"isTrigger":false
					}
				],
				"child":[]
			},
			{
				"type":"MeshSprite3D",
				"props":{
					"name":"Plane (4)",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						-0.88,
						0.44,
						28.124
					],
					"rotation":[
						0,
						0,
						0,
						-1
					],
					"scale":[
						1,
						1,
						1
					],
					"meshPath":"Library/unity default resources-Plane.lm",
					"enableRender":true,
					"materials":[
						{
							"path":"Assets/LayaAir3D/LayaTool/LayaResouce/Materials/WeChat.lmat"
						}
					]
				},
				"components":[
					{
						"type":"PhysicsCollider",
						"restitution":0,
						"friction":0.5,
						"rollingFriction":0,
						"shapes":[
							{
								"type":"BoxColliderShape",
								"center":[
									0,
									0,
									0
								],
								"size":[
									10,
									2.220446E-16,
									10
								]
							},
							{
								"type":"MeshColliderShape",
								"mesh":"Library/unity default resources-Plane.lm"
							}
						],
						"isTrigger":false
					}
				],
				"child":[]
			},
			{
				"type":"MeshSprite3D",
				"props":{
					"name":"Plane (5)",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						-0.88,
						0.44,
						38.126
					],
					"rotation":[
						0,
						0,
						0,
						-1
					],
					"scale":[
						1,
						1,
						1
					],
					"meshPath":"Library/unity default resources-Plane.lm",
					"enableRender":true,
					"materials":[
						{
							"path":"Assets/LayaAir3D/LayaTool/LayaResouce/Materials/ZhiFuBao.lmat"
						}
					]
				},
				"components":[
					{
						"type":"PhysicsCollider",
						"restitution":0,
						"friction":0.5,
						"rollingFriction":0,
						"shapes":[
							{
								"type":"BoxColliderShape",
								"center":[
									0,
									0,
									0
								],
								"size":[
									10,
									2.220446E-16,
									10
								]
							},
							{
								"type":"MeshColliderShape",
								"mesh":"Library/unity default resources-Plane.lm"
							}
						],
						"isTrigger":false
					}
				],
				"child":[]
			},
			{
				"type":"MeshSprite3D",
				"props":{
					"name":"Plane (6)",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						-0.88,
						0.44,
						48.128
					],
					"rotation":[
						0,
						0,
						0,
						-1
					],
					"scale":[
						1,
						1,
						1
					],
					"meshPath":"Library/unity default resources-Plane.lm",
					"enableRender":true,
					"materials":[
						{
							"path":"Assets/LayaAir3D/LayaTool/LayaResouce/Materials/WeChat.lmat"
						}
					]
				},
				"components":[
					{
						"type":"PhysicsCollider",
						"restitution":0,
						"friction":0.5,
						"rollingFriction":0,
						"shapes":[
							{
								"type":"BoxColliderShape",
								"center":[
									0,
									0,
									0
								],
								"size":[
									10,
									2.220446E-16,
									10
								]
							},
							{
								"type":"MeshColliderShape",
								"mesh":"Library/unity default resources-Plane.lm"
							}
						],
						"isTrigger":false
					}
				],
				"child":[]
			},
			{
				"type":"MeshSprite3D",
				"props":{
					"name":"Plane (7)",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						-0.88,
						0.44,
						58.13
					],
					"rotation":[
						0,
						0,
						0,
						-1
					],
					"scale":[
						1,
						1,
						1
					],
					"meshPath":"Library/unity default resources-Plane.lm",
					"enableRender":true,
					"materials":[
						{
							"path":"Assets/LayaAir3D/LayaTool/LayaResouce/Materials/ZhiFuBao.lmat"
						}
					]
				},
				"components":[
					{
						"type":"PhysicsCollider",
						"restitution":0,
						"friction":0.5,
						"rollingFriction":0,
						"shapes":[
							{
								"type":"BoxColliderShape",
								"center":[
									0,
									0,
									0
								],
								"size":[
									10,
									2.220446E-16,
									10
								]
							},
							{
								"type":"MeshColliderShape",
								"mesh":"Library/unity default resources-Plane.lm"
							}
						],
						"isTrigger":false
					}
				],
				"child":[]
			},
			{
				"type":"MeshSprite3D",
				"props":{
					"name":"Plane (8)",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						-0.88,
						0.44,
						68.132
					],
					"rotation":[
						0,
						0,
						0,
						-1
					],
					"scale":[
						1,
						1,
						1
					],
					"meshPath":"Library/unity default resources-Plane.lm",
					"enableRender":true,
					"materials":[
						{
							"path":"Assets/LayaAir3D/LayaTool/LayaResouce/Materials/WeChat.lmat"
						}
					]
				},
				"components":[
					{
						"type":"PhysicsCollider",
						"restitution":0,
						"friction":0.5,
						"rollingFriction":0,
						"shapes":[
							{
								"type":"BoxColliderShape",
								"center":[
									0,
									0,
									0
								],
								"size":[
									10,
									2.220446E-16,
									10
								]
							},
							{
								"type":"MeshColliderShape",
								"mesh":"Library/unity default resources-Plane.lm"
							}
						],
						"isTrigger":false
					}
				],
				"child":[]
			},
			{
				"type":"MeshSprite3D",
				"props":{
					"name":"Cylinder",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						-0.63,
						1.51,
						18.26
					],
					"rotation":[
						0,
						0,
						0,
						-1
					],
					"scale":[
						1,
						1,
						1
					],
					"meshPath":"Library/unity default resources-Cylinder.lm",
					"enableRender":true,
					"materials":[
						{
							"type":"Laya.BlinnPhongMaterial",
							"path":"Assets/LayaAir3D/LayaTool/LayaResouce/Materials/recharge.lmat"
						}
					]
				},
				"components":[
					{
						"type":"Rigidbody3D",
						"mass":1,
						"isKinematic":false,
						"restitution":0,
						"friction":0.5,
						"rollingFriction":0,
						"linearDamping":0,
						"angularDamping":0,
						"overrideGravity":true,
						"gravity":[
							0,
							0,
							0
						],
						"shapes":[
							{
								"type":"BoxColliderShape",
								"center":[
									-5.960464E-08,
									0,
									-8.940697E-08
								],
								"size":[
									1,
									2,
									1
								]
							},
							{
								"type":"CapsuleColliderShape",
								"center":[
									0,
									0,
									0
								],
								"radius":0.5,
								"height":2
							}
						],
						"isTrigger":false
					}
				],
				"child":[]
			},
			{
				"type":"MeshSprite3D",
				"props":{
					"name":"Cylinder (1)",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						-3.87,
						1.51,
						19.58
					],
					"rotation":[
						0,
						0,
						0,
						-1
					],
					"scale":[
						1,
						1,
						1
					],
					"meshPath":"Library/unity default resources-Cylinder.lm",
					"enableRender":true,
					"materials":[
						{
							"type":"Laya.BlinnPhongMaterial",
							"path":"Assets/LayaAir3D/LayaTool/LayaResouce/Materials/recharge.lmat"
						}
					]
				},
				"components":[
					{
						"type":"Rigidbody3D",
						"mass":1,
						"isKinematic":false,
						"restitution":0,
						"friction":0.5,
						"rollingFriction":0,
						"linearDamping":0,
						"angularDamping":0,
						"overrideGravity":true,
						"gravity":[
							0,
							0,
							0
						],
						"shapes":[
							{
								"type":"BoxColliderShape",
								"center":[
									-5.960464E-08,
									0,
									-8.940697E-08
								],
								"size":[
									1,
									2,
									1
								]
							},
							{
								"type":"CapsuleColliderShape",
								"center":[
									0,
									0,
									0
								],
								"radius":0.5,
								"height":2
							}
						],
						"isTrigger":false
					}
				],
				"child":[]
			},
			{
				"type":"MeshSprite3D",
				"props":{
					"name":"Cylinder (2)",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						2.53,
						1.51,
						15.6
					],
					"rotation":[
						0,
						0,
						0,
						-1
					],
					"scale":[
						1,
						1,
						1
					],
					"meshPath":"Library/unity default resources-Cylinder.lm",
					"enableRender":true,
					"materials":[
						{
							"type":"Laya.BlinnPhongMaterial",
							"path":"Assets/LayaAir3D/LayaTool/LayaResouce/Materials/recharge.lmat"
						}
					]
				},
				"components":[
					{
						"type":"Rigidbody3D",
						"mass":1,
						"isKinematic":false,
						"restitution":0,
						"friction":0.5,
						"rollingFriction":0,
						"linearDamping":0,
						"angularDamping":0,
						"overrideGravity":true,
						"gravity":[
							0,
							0,
							0
						],
						"shapes":[
							{
								"type":"BoxColliderShape",
								"center":[
									-5.960464E-08,
									0,
									-8.940697E-08
								],
								"size":[
									1,
									2,
									1
								]
							},
							{
								"type":"CapsuleColliderShape",
								"center":[
									0,
									0,
									0
								],
								"radius":0.5,
								"height":2
							}
						],
						"isTrigger":false
					}
				],
				"child":[]
			},
			{
				"type":"MeshSprite3D",
				"props":{
					"name":"wood",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						-0.47,
						1,
						37.27
					],
					"rotation":[
						0,
						0,
						0,
						-1
					],
					"scale":[
						3.017588,
						1,
						1
					],
					"meshPath":"Library/unity default resources-Cube.lm",
					"enableRender":true,
					"materials":[
						{
							"type":"Laya.BlinnPhongMaterial",
							"path":"Assets/LayaAir3D/LayaTool/LayaResouce/Materials/ZhiFuBaoPlayCode.lmat"
						}
					]
				},
				"components":[
					{
						"type":"PhysicsCollider",
						"restitution":0,
						"friction":0.5,
						"rollingFriction":0,
						"shapes":[
							{
								"type":"BoxColliderShape",
								"center":[
									0,
									0,
									0
								],
								"size":[
									1,
									1,
									1
								]
							},
							{
								"type":"BoxColliderShape",
								"center":[
									0,
									0,
									0
								],
								"size":[
									1,
									1,
									1
								]
							}
						],
						"isTrigger":false
					}
				],
				"child":[]
			},
			{
				"type":"MeshSprite3D",
				"props":{
					"name":"gameOver",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						-1.34,
						1,
						67.69
					],
					"rotation":[
						0,
						0,
						0,
						-1
					],
					"scale":[
						12.82699,
						1,
						1
					],
					"meshPath":"Library/unity default resources-Cube.lm",
					"enableRender":true,
					"materials":[
						{
							"type":"Laya.BlinnPhongMaterial",
							"path":"Resources/unity_builtin_extra.lmat"
						}
					]
				},
				"components":[
					{
						"type":"PhysicsCollider",
						"restitution":0,
						"friction":0.5,
						"rollingFriction":0,
						"shapes":[
							{
								"type":"BoxColliderShape",
								"center":[
									0,
									0,
									0
								],
								"size":[
									1,
									1,
									1
								]
							},
							{
								"type":"BoxColliderShape",
								"center":[
									0,
									0,
									0
								],
								"size":[
									1,
									1,
									1
								]
							}
						],
						"isTrigger":false
					}
				],
				"child":[]
			}
		]
	}
}