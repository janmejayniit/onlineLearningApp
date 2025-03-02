import React, { useState } from "react";
import axios from "axios";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Essentials, Paragraph, Bold, Italic, Link ,Indent, 
    IndentBlock, BlockQuote, Font, FontFamily, Strikethrough, Subscript, Superscript, Code,
    Heading,FontSize, List, ListProperties, MediaEmbed} from 'ckeditor5';

const AddCourse = ()=>{

    const [courseContent, setCourseContent] = useState({title:'',flag_name:'',summary:'',banner:'',content:'',original_price:'',sale_price:''});

    const submitCourseContent = async (e) =>{
        e.preventDefault();
        try{
            const url="http://localhost:8000/course/add/";
            const formData = new FormData();

            // Append all the form data, including the file
            formData.append('title', courseContent.title);
            formData.append('flag_name', courseContent.flag_name);
            formData.append('original_price', courseContent.original_price);
            formData.append('sale_price', courseContent.sale_price);
            formData.append('summary', courseContent.summary);
            formData.append('content', courseContent.content);
            formData.append('teacher', localStorage.getItem('id'));
            if (courseContent.banner) {
                formData.append('banner', courseContent.banner);
            }

            const response = await axios.post(url,formData,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                },

            });
            const data = await response.data;
            console.log(data);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            setCourseContent({title:'',flag_name:'',summary:'',banner:'',content:'',original_price:'',sale_price:''});
            document.querySelector('input[type="file"]').value = '';

        }
    }


    return(<div className="container mt-3">
        <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
                <div className="card shadow">
                    <div className="card-header">Add Course Details</div>
                    <div className="card-body">
                        <form onSubmit={submitCourseContent}>

                            <div className="mb-3">
                                <label className="form-label">Title of course</label>
                                <input
                                    type="text"
                                    className="form-control form-control-sm"
                                    value={courseContent.title}
                                    onChange={(e)=>setCourseContent(prevData=>({...prevData,title: e.target.value}))}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Flag(If any)</label>
                                <input
                                    type="text"
                                    className="form-control form-control-sm"
                                    placeholder="Like Premium"
                                    value={courseContent.flag_name}
                                    onChange={(e)=>setCourseContent(prevData=>({...prevData,flag_name: e.target.value}))}

                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Brief Details of course</label>
                                <textarea
                                    className="form-control form-control-sm"
                                    value={courseContent.summary}
                                    onChange={(e)=>setCourseContent(prevData=>({...prevData,summary: e.target.value}))}
                                ></textarea>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="mb-3">
                                        <label className="form-label">Original Price</label>
                                        <input
                                            type="number"
                                            className="form-control form-control-sm"
                                            value={courseContent.original_price}
                                            onChange={(e)=>setCourseContent(prevData=>({...prevData,original_price: e.target.value}))}


                                        />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-3">
                                        <label className="form-label">Sale Price</label>
                                        <input
                                            type="number"
                                            className="form-control form-control-sm"
                                            value={courseContent.sale_price}
                                            onChange={(e)=>setCourseContent(prevData=>({...prevData,sale_price: e.target.value}))}


                                        />
                                    </div>
                                </div>
                            </div>


                            <div className="mb-3">
                                <label className="form-label">Upload banner</label>
                                <input
                                    type="file"
                                    className="form-control form-control-sm"
                                    onChange={(e)=>setCourseContent(prevData=>({...prevData,banner: e.target.files[0]}))}


                                />
                            </div>


                            <div className="mb-3">
                                <label className="form-label">Content</label>
                                <CKEditor
                                    editor={ClassicEditor}
                                    config={{
                                        licenseKey: 'GPL',
                                        plugins: [Essentials, Paragraph, Bold, Italic, Strikethrough, Subscript, Superscript, Code, Indent, IndentBlock, BlockQuote, Font, FontFamily, Heading, FontSize, List, ListProperties, MediaEmbed, Link],
                                        toolbar: {
                                            items: [
                                                'undo', 'redo',
                                                '|',
                                                'heading',
                                                '|',
                                                'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor',
                                                '|',
                                                'bold', 'italic', 'strikethrough', 'subscript', 'superscript', 'code',
                                                '|',
                                                'link', 'uploadImage', 'blockQuote', 'codeBlock',
                                                '|',
                                                'alignment',
                                                '|',
                                                'bulletedList', 'numberedList', 'todoList', 'outdent', 'indent',
                                                '|',
                                                'mediaEmbed', 'link',
                                            ],
                                            // shouldNotGroupWhenFull: true
                                        }
                                    }}
                                    data={courseContent.content}
                                    onReady={editor => {
                                        // You can store the "editor" and use when it is needed.
                                        // console.log('Editor is ready to use!', editor);
                                    }}
                                    onChange={(event, editor) => {
                                        const content = editor.getData();
                                        // console.log(content);
                                        setCourseContent(prevData => ({ ...prevData, content}));
                                    }}
                                    onBlur={(event, editor) => {
                                        // console.log('Blur.', editor);
                                    }}
                                    onFocus={(event, editor) => {
                                        // console.log('Focus.', editor);
                                    }}
                                />
                            </div>

                            <button type="submit" className="btn btn-dark btn-sm">Add</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>

    </div>)
}

export default AddCourse;