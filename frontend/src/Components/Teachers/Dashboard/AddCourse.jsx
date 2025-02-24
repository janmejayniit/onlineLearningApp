import React, { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Essentials, Paragraph, Bold, Italic, Link ,Indent, 
    IndentBlock, BlockQuote, Font, FontFamily, Strikethrough, Subscript, Superscript, Code,
    Heading,FontSize, List, ListProperties, MediaEmbed} from 'ckeditor5';

const AddCourse = ()=>{

    const [courseContent, setCourseContent] = useState({'title':'','course_summary':'','banner':'','course_content':''});

    return(<div className="container mt-3">
        <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
                <div className="card shadow">
                    <div className="card-header">Add Course Details</div>
                    <div className="card-body">
                        <form>
                             
                            <div className="mb-3">
                                <label className="form-label">Title of course</label>
                                <input type="text" className="form-control form-control-sm"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Brief Details of course</label>
                                <textarea className="form-control form-control-sm"></textarea>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Upload banner</label>
                                <input type="file" className="form-control form-control-sm"/>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Content</label>
                                <CKEditor
                                    editor={ ClassicEditor }
                                    config={ {
                                        licenseKey: 'GPL',
                                        plugins: [ Essentials, Paragraph, Bold, Italic , Strikethrough, Subscript, Superscript, Code, Indent, IndentBlock, BlockQuote, Font, FontFamily, Heading, FontSize,List, ListProperties,MediaEmbed, Link],
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
                                                'mediaEmbed','link',
                                            ],
                                            // shouldNotGroupWhenFull: true
                                        }
                                    } }
                                    data={courseContent.content}
                                    onReady={ editor => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log( 'Editor is ready to use!', editor );
                                    } }
                                    onChange={ ( event, editor ) => {
                                        const content = editor.getData();
                                        setCourseContent(prevCourseContent => ({ ...prevCourseContent, content }));
                                    } }
                                    onBlur={ ( event, editor ) => {
                                        console.log( 'Blur.', editor );
                                    } }
                                    onFocus={ ( event, editor ) => {
                                        console.log( 'Focus.', editor );
                                    } }
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